// Vercel Serverless Function for OpenAI recommendations
// This keeps your API key secure on the server

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { query, category, budget, preferences } = req.body;

        // Validate input
        if (!query || !category || !budget) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const budgetRanges = {
            budget: '₹0-₹3,000',
            mid: '₹3,000-₹15,000',
            premium: '₹15,000-₹40,000',
            luxury: '₹40,000+'
        };

        const prefsText = [];
        if (preferences.ecoFriendly) prefsText.push('eco-friendly/sustainable');
        if (preferences.fastShipping) prefsText.push('fast shipping available');
        if (preferences.highlyRated) prefsText.push('highly rated');

        const prompt = `You are an expert shopping assistant for Indian D2C (Direct-to-Consumer) brands. A user in India is looking for products:

Query: "${query}"
Category: ${category}
Budget: ${budgetRanges[budget]} (INR - Indian Rupees)
Preferences: ${prefsText.join(', ') || 'none specified'}

Recommend exactly 3 products from official brand websites (D2C model). Focus on brands with strong online presence: Boat, Noise, Nike, Adidas, Minimalist, Mamaearth, Decathlon, OnePlus, Realme, Levi's, etc.

Return ONLY valid JSON in this exact format:
{
  "insights": "1-2 sentences explaining your recommendation strategy",
  "products": [
    {
      "name": "Exact product name (brand + model)",
      "image": "relevant emoji",
      "description": "Detailed 2-sentence description covering key features",
      "matchReason": "1 sentence explaining why this matches their query",
      "brand": {
        "name": "Brand Name",
        "storeUrl": "https://brand-website.com/products/exact-product-slug",
        "price": "₹XX,XXX",
        "inStock": true,
        "shipping": "Free delivery",
        "warranty": "X year warranty"
      }
    }
  ]
}

CRITICAL INSTRUCTIONS:
- storeUrl MUST be direct product page URL, NOT search/category pages
- Use exact product slugs in URLs (e.g., "/products/airdopes-131")
- If brand doesn't have D2C site, recommend alternative brand that does
- Price should be official brand price
- Verify brand has active e-commerce before recommending
- For books category: Use Amazon.in direct product URLs (exception allowed)

INDIAN D2C BRANDS BY CATEGORY:
- Electronics: Boat (boat-lifestyle.com), Noise (gonoise.com), OnePlus (oneplus.in), Realme (buy.realme.com/in)
- Fashion: Nike (nike.com/in), Adidas (adidas.co.in), Levi's (levi.in), Puma (in.puma.com)
- Beauty: Minimalist (beminimalist.co), Mamaearth (mamaearth.in), Nykaa (nykaa.com), Plum (plumgoodness.com)
- Sports: Decathlon (decathlon.in), Nivia (nivia.com)
- Home: Philips (philips.co.in), Prestige (prestigesmartchef.com)
- Books: Amazon.in (use direct product URLs with ASIN: amazon.in/dp/ASIN)`;

        // Call OpenAI API - API key from environment variable
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are a helpful shopping assistant that returns only valid JSON responses.' },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('OpenAI API Error:', error);
            return res.status(response.status).json({
                error: 'AI service error',
                details: error
            });
        }

        const data = await response.json();
        const content = data.choices[0].message.content;

        // Parse JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            return res.status(500).json({ error: 'Invalid AI response format' });
        }

        const recommendations = JSON.parse(jsonMatch[0]);

        // Validate D2C structure
        if (recommendations.products) {
            recommendations.products.forEach(product => {
                if (!product.brand || !product.brand.storeUrl) {
                    throw new Error('Invalid D2C format: missing brand.storeUrl');
                }

                // Ensure URL is not a search page
                const url = product.brand.storeUrl;
                if (url.includes('/s?k=') || url.includes('/search?q=')) {
                    throw new Error('D2C URL must be direct product page, not search');
                }
            });
        }

        return res.status(200).json(recommendations);

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}

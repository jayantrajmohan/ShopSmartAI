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

        const prompt = `You are an expert shopping assistant for Indian e-commerce. A user in India is looking for products with these requirements:

Query: "${query}"
Category: ${category}
Budget: ${budgetRanges[budget]} (INR - Indian Rupees)
Preferences: ${prefsText.join(', ') || 'none specified'}

Recommend exactly 3 products available in India that best match their needs. Focus on products popular in Indian market from brands like Samsung, OnePlus, Boat, Noise, Xiaomi, Realme, Nike, Adidas, etc.

Return ONLY valid JSON in this exact format:
{
  "insights": "1-2 sentences explaining your overall recommendation strategy and why these products match their needs",
  "products": [
    {
      "name": "Exact product name (brand + model)",
      "image": "relevant emoji",
      "description": "Detailed 2-sentence description covering key features and benefits relevant to Indian market",
      "matchReason": "1 sentence explaining why this specific product matches their query",
      "platforms": [
        {
          "name": "Amazon.in",
          "price": "₹XX,XXX",
          "available": true,
          "rating": "4.5",
          "reviews": "1,234",
          "url": "https://www.amazon.in/s?k=product+name"
        },
        {
          "name": "Flipkart",
          "price": "₹XX,XXX",
          "available": true,
          "rating": "4.3",
          "reviews": "856",
          "url": "https://www.flipkart.com/search?q=product+name"
        },
        {
          "name": "Myntra",
          "price": "₹XX,XXX",
          "available": false
        }
      ]
    }
  ]
}

IMPORTANT:
- All prices must be in Indian Rupees (₹)
- Include at least 2-3 platforms per product
- Mark available=true only for platforms that typically sell this product
- Use realistic Indian pricing
- For each available platform, include a search URL (e.g., https://www.amazon.in/s?k=product+name or https://www.flipkart.com/search?q=product+name)
- URL-encode product names in search URLs (replace spaces with +)
- Popular Indian platforms: Amazon.in, Flipkart, Myntra, Ajio, Nykaa, Croma, Reliance Digital`;

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

        return res.status(200).json(recommendations);

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}

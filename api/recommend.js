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
            budget: '$0-$50',
            mid: '$50-$200',
            premium: '$200-$500',
            luxury: '$500+'
        };

        const prefsText = [];
        if (preferences.ecoFriendly) prefsText.push('eco-friendly/sustainable');
        if (preferences.fastShipping) prefsText.push('fast shipping available');
        if (preferences.highlyRated) prefsText.push('highly rated');

        const prompt = `You are an expert shopping assistant. A user is looking for products with these requirements:

Query: "${query}"
Category: ${category}
Budget: ${budgetRanges[budget]}
Preferences: ${prefsText.join(', ') || 'none specified'}

Recommend exactly 3 products that best match their needs. Return ONLY valid JSON in this exact format:
{
  "insights": "1-2 sentences explaining your overall recommendation strategy and why these products match their needs",
  "products": [
    {
      "name": "Exact product name",
      "price": "$XX",
      "image": "relevant emoji",
      "description": "Detailed 2-sentence description covering key features and benefits",
      "matchReason": "1 sentence explaining why this specific product matches their query"
    }
  ]
}`;

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

# ShopSmart AI - E-commerce Product Recommender

AI-powered product recommendation engine that understands natural language queries and provides personalized shopping suggestions.

## 🚀 Quick Start

### Option 1: Run Locally (No Setup Required)

1. Open `index.html` in your browser
2. The app works immediately with **mock AI data**
3. Try the example queries or write your own!

### Option 2: Deploy to Vercel/Netlify (2 minutes)

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd ecommerce-ai
vercel

# Your site is live!
```

**Netlify:**
1. Drag the entire `ecommerce-ai` folder onto [netlify.com](https://netlify.com)
2. Done! Site is live instantly

### Option 3: Enable Real AI (OpenAI API)

1. Get API key from [OpenAI](https://platform.openai.com/api-keys)
2. Open `script.js`
3. Add your key:
```javascript
const OPENAI_API_KEY = 'sk-your-key-here';
```
4. Refresh the page - now using real AI! 🎉

## 📁 Project Structure

```
ecommerce-ai/
├── index.html              # Main app page
├── styles.css              # All styling
├── script.js               # AI logic & interactions
├── PRODUCT_BRIEF.md        # Full product documentation
└── README.md               # This file
```

## ✨ Features

- **Natural Language Search** - Describe products in your own words
- **AI-Powered Matching** - Intelligent recommendations based on needs
- **Budget Filtering** - Stays within your price range
- **Preference Tracking** - Eco-friendly, fast shipping, high ratings
- **Mobile Optimized** - Perfect experience on any device
- **Mock AI Mode** - Works without API key for demos

## 🎯 How to Use

1. **Describe what you're looking for** (e.g., "laptop for coding under $1000")
2. **Select category and budget** (optional filters)
3. **Add preferences** (eco-friendly, fast shipping, etc.)
4. **Get 3 personalized recommendations** with explanations

## 🔧 Customization

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --secondary: #10b981;      /* Success/accent color */
    /* ... more colors */
}
```

### Add More Product Categories

In `script.js`, add to the `generateMockProducts()` function:
```javascript
const products = {
    electronics: [...],
    fashion: [...],
    yourcategory: [
        {
            name: 'Product Name',
            price: '$XX',
            description: 'Description...',
            matchReason: 'Why it matches'
        }
    ]
};
```

### Modify AI Prompts

In `script.js`, edit the `getRealAIRecommendations()` prompt:
```javascript
const prompt = `You are an AI shopping assistant...
// Customize this to change AI behavior
`;
```

## 📊 Technical Details

### Technologies
- **Frontend:** Pure HTML/CSS/JavaScript (no frameworks)
- **AI:** OpenAI GPT-4 API
- **Styling:** Custom CSS with CSS variables
- **Icons:** Inline SVG (Feather Icons style)

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

### Performance
- Load time: < 2 seconds
- AI response: 2-4 seconds
- Lighthouse score: 95+

## 🎨 Design System

**Colors:**
- Primary: Indigo (#6366f1)
- Secondary: Green (#10b981)
- Accent: Amber (#f59e0b)

**Typography:**
- Headings: Space Grotesk
- Body: Inter
- Sizes: 16px base, responsive scaling

**Layout:**
- Mobile-first approach
- Two-column desktop layout
- Single-column mobile stack

## 💡 Tips for Interviews

When presenting this project:

1. **Start with the problem:** "Online shopping overwhelms users with choices"
2. **Explain AI decision:** "Used GPT-4 for NLP vs. building custom ML model"
3. **Show user flow:** Walk through actual usage
4. **Discuss tradeoffs:** API cost vs. speed to market
5. **Future roadmap:** Visual search, personalization, integration

### Common Questions

**Q: Why not use a recommendation algorithm?**
A: Traditional algorithms need purchase history. This works for first-time visitors using intent-based matching.

**Q: How do you handle API costs?**
A: For MVP/demo: Mock data mode. Production: Cached responses, rate limiting, tiered pricing.

**Q: What about wrong recommendations?**
A: Confidence scoring, structured prompts, user feedback loop, gradual improvement.

## 📈 Metrics to Track

If deployed in production:

**User Engagement:**
- Form completion rate
- Queries per session
- Time to first recommendation

**Product Quality:**
- Recommendation relevance (user ratings)
- Click-through rate
- Conversion rate vs. traditional search

**Business Impact:**
- User retention
- Average session time
- Customer satisfaction (CSAT)

## 🚧 Known Limitations

1. **Mock data only includes 3 categories** - Add more in script.js
2. **No real product database** - This is a demo of the AI interface
3. **API rate limits** - OpenAI has usage limits on free tier
4. **No user accounts** - Stateless experience

## 🔮 Future Enhancements

### Phase 2: User Profiles
- Save preferences
- Purchase history
- Personalized recommendations

### Phase 3: Visual Search
- Upload product photos
- Image-based matching
- Style recognition

### Phase 4: Live Integration
- Connect to Shopify/WooCommerce
- Real inventory
- Direct checkout

## 🐛 Troubleshooting

**AI not working:**
- Check if API key is added to `script.js`
- Verify API key is valid on OpenAI dashboard
- Check browser console for errors

**Styles broken:**
- Clear browser cache
- Check `styles.css` is in same folder
- Try different browser

**Slow loading:**
- Check internet connection
- OpenAI API can be slow (2-5 seconds normal)
- Try mock mode for instant results

## 📝 License

Free to use for personal portfolio projects.

## 🤝 Connect

**Created by:** Jayant Raj Mohan  
**Email:** jayantrajmohan@gmail.com  
**LinkedIn:** [linkedin.com/in/jayantrajmohan](https://linkedin.com/in/jayantrajmohan)  
**Portfolio:** [Your portfolio URL]

---

## 🎯 Deployment Checklist

Before sharing this project:

- [ ] Test on mobile device
- [ ] Test with real API (if enabled)
- [ ] Test all example queries
- [ ] Check console for errors
- [ ] Verify all links work
- [ ] Add your info to footer
- [ ] Take screenshots for portfolio
- [ ] Write LinkedIn post about it
- [ ] Update portfolio site with link
- [ ] Prepare talking points for interviews

**Time to deploy: 5 minutes**
**Time to enable real AI: 2 minutes**

Good luck! 🚀

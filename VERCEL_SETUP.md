# Vercel Deployment with Environment Variables

Complete guide to deploying ShopSmart AI to Vercel with secure OpenAI API integration.

---

## 🚀 Quick Deployment Steps

### 1. Push Updated Code to GitHub

```bash
cd "c:\Portfolio Website\ShopSmartAI"
git add .
git commit -m "Add Vercel serverless function for secure OpenAI integration"
git push
```

### 2. Deploy to Vercel

**Option A: Vercel Dashboard (Easiest)**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `ShopSmartAI` repository
4. Click "Import"
5. Vercel will auto-detect the configuration
6. Click "Deploy"

**Option B: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd "c:\Portfolio Website\ShopSmartAI"
vercel
```

### 3. Add Environment Variable

1. Go to your project on Vercel: `vercel.com/[your-username]/shopsmart-ai`
2. Click **Settings** tab
3. Click **Environment Variables** in left sidebar
4. Add new variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** `sk-proj-YOUR-ACTUAL-API-KEY-HERE`
   - **Environments:** Select all (Production, Preview, Development)
5. Click **Save**

### 4. Redeploy to Apply Environment Variable

**Option A: Via Dashboard**
1. Go to **Deployments** tab
2. Click the three dots (...) on latest deployment
3. Click **Redeploy**

**Option B: Via CLI**
```bash
vercel --prod
```

### 5. Enable Live AI Mode

1. Open your deployed site
2. Open browser DevTools (F12)
3. You should see console message: "🤖 Demo Mode Active"
4. Edit `index.html` line 390:
   ```javascript
   const USE_REAL_AI = true; // Changed from false
   ```
5. Commit and push:
   ```bash
   git add index.html
   git commit -m "Enable live AI mode for production"
   git push
   ```
6. Vercel will auto-deploy the update
7. Refresh your site - should now show "✅ Live AI Mode Enabled"

---

## 📁 What We Changed

### New Files Created

1. **`api/recommend.js`** - Vercel serverless function
   - Handles OpenAI API calls securely on the server
   - Reads API key from environment variable
   - Never exposes key to frontend

2. **`vercel.json`** - Vercel configuration
   - Configures serverless function settings
   - Sets memory and timeout limits

3. **`VERCEL_SETUP.md`** - This file

### Modified Files

1. **`index.html`**
   - Updated `getRealAIRecommendations()` to call `/api/recommend` instead of OpenAI directly
   - Removed hardcoded API key reference
   - Added `USE_REAL_AI` toggle for demo/live mode

---

## 🔒 Security: How It Works

### Before (Insecure):
```
Browser → OpenAI API (with exposed API key in frontend code)
❌ API key visible in browser
❌ Anyone can steal and use your key
```

### After (Secure):
```
Browser → /api/recommend (Vercel function) → OpenAI API
✅ API key stored in Vercel environment variables
✅ Never exposed to browser
✅ Only server can access it
```

---

## 🧪 Testing

### Test Locally (Optional)

1. Install Vercel CLI: `npm i -g vercel`
2. Create `.env` file:
   ```
   OPENAI_API_KEY=sk-proj-YOUR-KEY-HERE
   ```
3. Run local dev server:
   ```bash
   vercel dev
   ```
4. Open http://localhost:3000
5. Change `USE_REAL_AI = true` in browser DevTools

### Test in Production

1. Deploy to Vercel
2. Add environment variable (see step 3 above)
3. Set `USE_REAL_AI = true` in code
4. Visit your site
5. Try a query - should get real AI recommendations

---

## 📊 How to Check It's Working

### Demo Mode (Mock Data)
```
Badge: Blue "Demo Mode - Mock Data"
Console: "🤖 Demo Mode Active"
Results: Curated mock products (same every time)
Response time: 2.5 seconds (simulated)
```

### Live AI Mode (Real OpenAI)
```
Badge: Green "Live AI Mode" with pulsing dot
Console: "✅ Live AI Mode Enabled"
Results: AI-generated products (different each query)
Response time: 3-5 seconds (actual API)
```

---

## 💰 Cost Optimization

### Vercel Costs
- **Free Tier:** 100GB bandwidth, 100 serverless function invocations per day
- **This project:** Well within free limits for portfolio/demo use

### OpenAI Costs
- **Model:** GPT-4o-mini (most cost-effective)
- **Cost per query:** ~$0.001-0.003 (less than 1 cent)
- **Free credits:** $5 for new accounts = ~2,000-5,000 queries

### Tips to Minimize Costs
1. Keep `USE_REAL_AI = false` for general browsing
2. Only set `true` when demoing to recruiters
3. Consider rate limiting (add to serverless function)
4. Cache common queries

---

## 🐛 Troubleshooting

### "API request failed: 500"
**Cause:** Environment variable not set or incorrect
**Fix:**
1. Check Vercel dashboard → Settings → Environment Variables
2. Verify `OPENAI_API_KEY` is set
3. Redeploy after adding/changing

### "Demo Mode Active" but USE_REAL_AI is true
**Cause:** Code not deployed yet
**Fix:**
```bash
git add .
git commit -m "Enable live AI"
git push
# Wait for Vercel auto-deploy
```

### Function times out
**Cause:** OpenAI API slow or unavailable
**Fix:**
- Increase timeout in `vercel.json` (currently 10s)
- Check OpenAI API status
- Add retry logic to serverless function

### "Invalid API key" error
**Cause:** Wrong API key or key revoked
**Fix:**
1. Get new key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Update in Vercel environment variables
3. Redeploy

---

## 🔄 Update Process

### To Update Code:
```bash
# Make changes to index.html or api/recommend.js
git add .
git commit -m "Your update message"
git push
# Vercel auto-deploys in ~30 seconds
```

### To Update API Key:
1. Vercel dashboard → Settings → Environment Variables
2. Click "Edit" on `OPENAI_API_KEY`
3. Enter new value
4. Click "Save"
5. Redeploy (Deployments → ... → Redeploy)

---

## 📝 Environment Variables Reference

### Required Variables

| Variable | Value | Where Used |
|----------|-------|------------|
| `OPENAI_API_KEY` | `sk-proj-...` | `/api/recommend.js` line 51 |

### Optional Variables (Future)

| Variable | Value | Purpose |
|----------|-------|---------|
| `OPENAI_MODEL` | `gpt-4o-mini` | Override default model |
| `MAX_TOKENS` | `1000` | Limit response length |
| `RATE_LIMIT` | `10` | Requests per minute per IP |

---

## ✅ Deployment Checklist

Before going live:

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Environment variable `OPENAI_API_KEY` added
- [ ] Redeployed after adding env var
- [ ] `USE_REAL_AI = true` in code
- [ ] Tested with real query
- [ ] Green "Live AI Mode" badge visible
- [ ] Real AI recommendations working
- [ ] No console errors
- [ ] Mobile responsive (test on phone)

---

## 🎯 After Deployment

### Update Your README.md

Replace `YOUR-LIVE-URL` with your actual Vercel URL:

```markdown
**[🚀 View Live Demo](https://shopsmart-ai-yourname.vercel.app)**
```

### Share Your Live Demo

- Update resume with live link
- Add to LinkedIn profile
- Share in portfolio
- Demo to recruiters

---

## 📞 Support

**Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
**OpenAI API Docs:** [platform.openai.com/docs](https://platform.openai.com/docs)
**Issues:** File at GitHub repo

---

**Your project is now production-ready with secure API key management!** 🎉

**Live URL will be:** `https://shopsmart-ai-[yourname].vercel.app`

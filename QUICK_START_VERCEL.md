# Quick Start: Deploy to Vercel with Real AI

**5-minute guide to get your project live with real OpenAI integration.**

---

## ✅ Step 1: Deploy to Vercel (2 minutes)

### Via Vercel Dashboard (Easiest)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click **"Import Git Repository"**
4. Find and select `ShopSmartAI`
5. Click **"Import"**
6. Click **"Deploy"** (leave all settings default)
7. Wait 30 seconds for deployment to complete ✅

Your site is now live at: `https://shopsmart-ai-[random].vercel.app`

---

## ✅ Step 2: Add OpenAI API Key (1 minute)

1. On the deployment success page, click **"Go to Dashboard"**
2. Click **"Settings"** tab at the top
3. Click **"Environment Variables"** in left sidebar
4. Click **"Add"** button
5. Fill in:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Paste your OpenAI API key (starts with `sk-proj-...`)
   - **Environments:** Check all boxes (Production, Preview, Development)
6. Click **"Save"**

---

## ✅ Step 3: Enable Live AI Mode (1 minute)

### Option A: Quick Edit in GitHub

1. Go to your GitHub repo: `github.com/jayantrajmohan/ShopSmartAI`
2. Click on `index.html`
3. Click the pencil icon (Edit this file)
4. Find line 390: `const USE_REAL_AI = false;`
5. Change to: `const USE_REAL_AI = true;`
6. Scroll down, click **"Commit changes"**
7. Add message: "Enable live AI mode"
8. Click **"Commit changes"**

### Option B: Edit Locally and Push

```bash
# Edit index.html line 390
const USE_REAL_AI = true; # Change from false

# Commit and push
git add index.html
git commit -m "Enable live AI mode"
git push
```

Vercel will auto-deploy in 30 seconds.

---

## ✅ Step 4: Redeploy (30 seconds)

**Important:** After adding the environment variable, you need to redeploy once.

1. Go to Vercel dashboard → **"Deployments"** tab
2. Find the latest deployment
3. Click the three dots (...) on the right
4. Click **"Redeploy"**
5. Wait 30 seconds

---

## ✅ Step 5: Test It! (1 minute)

1. Visit your live site: `https://shopsmart-ai-[yourname].vercel.app`
2. You should see a **green badge** that says **"Live AI Mode"** 🟢
3. Fill in the form with a query like:
   ```
   "I need wireless headphones for working out,
   sweat-resistant, good battery life, under $100"
   ```
4. Click **"Get AI Recommendations"**
5. Wait 3-5 seconds for real AI-generated recommendations ✨

If you see different products each time you try the same query, **it's working!**

---

## 🎉 You're Done!

Your ShopSmart AI is now live with real OpenAI integration!

**Your live URL:** Check Vercel dashboard

**Next steps:**
- Share the link on LinkedIn
- Add to your resume
- Update your portfolio with the live link
- Show it to recruiters!

---

## 🐛 Troubleshooting

### Still seeing "Demo Mode - Mock Data"?

**Check:**
1. Is `USE_REAL_AI = true` in your code? (GitHub → index.html line 390)
2. Did you commit and push the change?
3. Did Vercel auto-deploy? (Check Deployments tab)

**Fix:** Wait 1-2 minutes for Vercel to rebuild and deploy.

---

### Getting "API request failed: 500"?

**Check:**
1. Is `OPENAI_API_KEY` set in Vercel environment variables?
2. Did you redeploy after adding it?

**Fix:**
1. Vercel → Settings → Environment Variables
2. Verify the variable exists and value is correct
3. Go to Deployments → Latest → ... → Redeploy

---

### API key error or "unauthorized"?

**Check:**
1. Is your OpenAI API key valid?
2. Do you have credits? (Check [platform.openai.com/usage](https://platform.openai.com/usage))

**Fix:**
1. Get a new API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Update in Vercel environment variables
3. Redeploy

---

## 📊 How to Verify It's Using Real AI

### Demo Mode (Old)
- Badge: Blue "Demo Mode - Mock Data"
- Same products every time
- 2.5 second simulated delay

### Live AI Mode (New)
- Badge: Green "Live AI Mode" 🟢
- Different products for each query
- 3-5 second actual API call
- Personalized to your specific query

---

## 💰 What It Costs

**Vercel:** FREE (well within free tier for portfolio use)
**OpenAI:** ~$0.001-0.003 per query (less than 1 cent)

Your $5 free OpenAI credits = ~2,000-5,000 queries!

---

## 📞 Need Help?

See detailed guide: [VERCEL_SETUP.md](VERCEL_SETUP.md)

**Common issues:**
- Environment variable not working → Redeploy
- Still in demo mode → Check USE_REAL_AI = true
- 500 errors → Check environment variable is set

---

**Total time:** 5 minutes
**Result:** Production-ready AI app with secure API key! 🚀

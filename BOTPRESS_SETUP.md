# Botpress Chatbot Setup Guide

## Step 1: Get Your Botpress Credentials

1. **Go to your Botpress Dashboard**: https://app.botpress.cloud/
2. **Select your existing bot** (the one that reached quota)
3. **Click on "Integrations"** in the left sidebar
4. **Find "Webchat"** and click on it
5. **Copy the following values**:
   - **Bot ID** (looks like: `abc123-def456-ghi789`)
   - **Client ID** (looks like: `bp_pat_xxxxxxxxxxxx`)
   - **Webchat URL** (optional custom styling)

## Step 2: Update the Configuration

Open `src/components/common/BotpressChatWidget.tsx` and replace:

```typescript
const BOTPRESS_BOT_ID = 'YOUR_BOT_ID_HERE'; // Replace with your Bot ID
const BOTPRESS_CLIENT_ID = 'YOUR_CLIENT_ID_HERE'; // Replace with your Client ID
```

## Step 3: Train Your Bot (Optional)

In your Botpress dashboard, you can:

1. **Add Intents** for common questions:
   - `loan-application` - "Paano mag-apply?", "How to apply?"
   - `loan-amount` - "Magkano pwedeng loan?", "How much can I borrow?"
   - `fees` - "Free ba?", "May bayad ba?", "How much does it cost?"
   - `security` - "Secure ba?", "Safe ba data ko?"
   - `requirements` - "Ano kailangan?", "What documents needed?"
   - `interest-rates` - "Ano interest rate?", "How much interest?"
   - `approval-time` - "Gaano katagal approval?", "How long approval?"

2. **Add Knowledge Base**:
   - Upload information about MSME Pathways
   - Add FAQs
   - Add loan terms and conditions

3. **Test in Botpress Emulator** before deploying

## Step 4: Deploy

Once configured, commit and push:

```bash
git add .
git commit -m "Integrate Botpress chatbot"
git push
```

Netlify will automatically deploy with your Botpress integration!

## Botpress Features You Can Use

- ✅ **AI-powered responses** using GPT
- ✅ **Multi-language support** (English & Filipino)
- ✅ **Conversation history**
- ✅ **Analytics and insights**
- ✅ **Human handoff** (for complex queries)
- ✅ **File uploads** (for document verification)
- ✅ **Rich media messages** (images, buttons, cards)

## Alternative: Upgrade Plan

If you want to create a new bot, you'll need to:
1. Delete your existing bot, OR
2. Upgrade to a paid Botpress plan that allows multiple bots

## Troubleshooting

**Problem**: Chatbot doesn't appear
- Check browser console for errors
- Verify Bot ID and Client ID are correct
- Ensure Botpress bot is published

**Problem**: Chatbot shows but doesn't respond
- Check if bot is properly trained in Botpress dashboard
- Verify your bot has at least one flow configured
- Test in Botpress emulator first

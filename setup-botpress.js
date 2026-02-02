#!/usr/bin/env node

/**
 * Botpress Chatbot Setup Helper
 * Run this to configure your Botpress chatbot integration
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🤖 Botpress Chatbot Setup for MSME Pathways           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

This script will help you configure your Botpress chatbot.

📋 Before you begin:
1. Go to https://app.botpress.cloud/
2. Select your bot
3. Click "Integrations" > "Webchat"
4. Copy your Bot ID and Client ID

Press Ctrl+C to cancel at any time.
`);

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  try {
    const botId = await question('\n🔑 Enter your Botpress Bot ID: ');
    const clientId = await question('🔑 Enter your Botpress Client ID: ');
    const styleId = await question('🎨 Enter your Custom Style ID (optional, press Enter to skip): ');

    if (!botId || !clientId) {
      console.error('\n❌ Bot ID and Client ID are required!');
      process.exit(1);
    }

    // Create .env file
    const envContent = `# Botpress Configuration
# Generated on ${new Date().toISOString()}

# Your Bot ID
VITE_BOTPRESS_BOT_ID=${botId}

# Your Client ID
VITE_BOTPRESS_CLIENT_ID=${clientId}

# Custom Stylesheet ID (optional)
${styleId ? `VITE_BOTPRESS_STYLE_ID=${styleId}` : '# VITE_BOTPRESS_STYLE_ID='}
`;

    const envPath = path.join(process.cwd(), '.env');
    fs.writeFileSync(envPath, envContent);

    console.log(`
✅ Configuration saved successfully!

📁 Created file: .env

🚀 Next steps:
1. Review the BOTPRESS_SETUP.md file for more details
2. Test locally: npm run dev
3. Deploy to Netlify: git add . && git commit -m "Configure Botpress" && git push

⚙️  Netlify Environment Variables:
Don't forget to add these to your Netlify dashboard:
- VITE_BOTPRESS_BOT_ID = ${botId}
- VITE_BOTPRESS_CLIENT_ID = ${clientId}
${styleId ? `- VITE_BOTPRESS_STYLE_ID = ${styleId}` : ''}

📊 Access Netlify Environment Variables:
1. Go to your Netlify dashboard
2. Select your site
3. Go to Site settings > Environment variables
4. Add the variables listed above

🎉 All done! Your Botpress chatbot is ready to use!
`);

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

setup();

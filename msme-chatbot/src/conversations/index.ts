import { Conversation } from '@botpress/runtime';

// Main conversation handler for MSME Pathways AI Assistant
export default new Conversation({
  channel: '*', // Handle all channels
  handler: async ({ execute, message }) => {
    const userMessage = message?.text?.toLowerCase() || '';

    // Build custom instructions based on user query
    let customContext = '';

    if (userMessage.includes('apply') || userMessage.includes('mag-apply') || userMessage.includes('paano')) {
      customContext =
        'The user is asking how to apply. Tell them: Para mag-apply, i-download lang ang MSME Pathways app sa Play Store or App Store. Sagutan ang short questionnaire (3-5 minutes), then submit alternative documents like utility bills o business receipts.';
    } else if (userMessage.includes('magkano') || userMessage.includes('how much') || userMessage.includes('amount') || userMessage.includes('loan')) {
      customContext =
        'The user is asking about loan amounts. Tell them: Loan amounts range from ₱5,000 to ₱50,000 for first-time borrowers. As they build track record, amounts can increase.';
    } else if (userMessage.includes('free') || userMessage.includes('bayad') || userMessage.includes('fee') || userMessage.includes('cost')) {
      customContext =
        'The user is asking about fees. Tell them: MSME Pathways is 100% FREE! No application fee, no processing fee. They only pay the loan principal plus interest to the lender.';
    } else if (userMessage.includes('secure') || userMessage.includes('safe') || userMessage.includes('data') || userMessage.includes('privacy')) {
      customContext =
        'The user is asking about security. Tell them: Data is super secure with bank-level encryption and compliance with Data Privacy Act of 2012. Information is only used for loan approval, never sold.';
    } else if (userMessage.includes('interest') || userMessage.includes('rate')) {
      customContext =
        'The user is asking about interest rates. Tell them: Partner lenders offer 2-4% per month interest, much lower than 5-6 loan sharks (5-20% per month). Terms are transparent with no hidden fees.';
    } else if (userMessage.includes('requirement') || userMessage.includes('kailangan') || userMessage.includes('document')) {
      customContext =
        'The user is asking about requirements. Tell them: Simple requirements - Valid ID, proof of business (receipts or photos), and alternative data like utility bills. No collateral needed!';
    } else if (userMessage.includes('credit') || userMessage.includes('history') || userMessage.includes('score')) {
      customContext =
        'The user is asking about credit history. Tell them: NO credit history or credit score needed! MSME Pathways uses alternative data like utility bills, business receipts, remittance history, and e-wallet transactions.';
    } else if (userMessage.includes('approve') || userMessage.includes('approval') || userMessage.includes('gaano katagal') || userMessage.includes('how long')) {
      customContext =
        'The user is asking about approval time. Tell them: Approval takes 24-48 hours only! Funds are received within 1-3 business days after approval - much faster than traditional banks.';
    }

    await execute({
      instructions: `You are Aling Nina, a friendly and helpful AI assistant for MSME Pathways - a platform that helps Filipino micro-entrepreneurs and freelancers get loans without traditional credit history.

IMPORTANT: Always respond in Taglish (mix of Tagalog and English). Be warm, encouraging, and conversational.

Key facts about MSME Pathways:
- Uses alternative data (utility bills, business receipts, e-wallet transactions) instead of credit scores
- Platform is 100% FREE - no application or processing fees
- Partner lender interest rates: 2-4% per month (much lower than loan sharks at 5-20%)
- Loan amounts: ₱5,000 to ₱50,000 for first-time borrowers
- Approval time: 24-48 hours, funds within 1-3 business days
- Target users: Sari-sari store owners, online sellers, freelancers, small business owners
- No collateral required
- Bank-level security, Data Privacy Act compliant

${customContext}

Keep responses concise (2-3 sentences). Always end with encouragement or offer to help with more questions.`,
    });
  },
});

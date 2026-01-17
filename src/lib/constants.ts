// Navigation Links
export const NAV_LINKS = [
    { href: '#home', label: 'Home' },
    { href: '#how-it-works', label: 'Paano?' },
    { href: '#features', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
] as const;

// Hero Section Stats
export const HERO_STATS = {
    users: '10,000+',
    rating: '4.8/5',
    stars: 5,
};

// Problems Section Data
export const PROBLEMS = [
    {
        icon: 'CircleX',
        title: 'No Credit History',
        description: 'Maraming negosyante ang walang credit record kaya mahirap silang pagkatiwalaan ng mga banks at lending institutions.',
    },
    {
        icon: 'FileQuestion',
        title: 'Limited Financial Knowledge',
        description: 'Kulang sa knowledge about proper borrowing at money management — hindi alam kung saan magsisimula.',
    },
    {
        icon: 'Building2',
        title: 'Complicated Bank Processes',
        description: 'Nakakatakot at overwhelming ang mga requirements at processes ng formal lending institutions.',
    },
] as const;

// Features Section Data
export const FEATURES = [
    {
        icon: 'Bot',
        title: 'AI Personal Guide',
        description: 'I-eexplain sa\'yo ang bawat detail ng loan nang simple at easy to understand. Parang may personal financial advisor ka!',
        badge: 'Powered by AI',
        image: '/mockup-chat.png',
    },
    {
        icon: 'UserCheck',
        title: 'No Credit History? No Problem!',
        description: 'Gumagamit kami ng alternative data para i-assess ang iyong capability. Fair at transparent para sa lahat.',
        badge: 'Inclusive Lending',
        image: '/mockup-profile.png',
    },
    {
        icon: 'Shield',
        title: 'Safe, Transparent, at Para Sa\'yo',
        description: 'Walang hidden charges. Walang pressure. Tuturuan ka lang at gagabayan sa tamang process.',
        badge: '100% Secure',
        image: '/mockup-loans.png',
    },
] as const;

// How It Works Steps
export const STEPS = [
    {
        number: 1,
        icon: 'Smartphone',
        title: 'Download the App',
        description: 'I-download from Google Play Store',
    },
    {
        number: 2,
        icon: 'GraduationCap',
        title: 'Learn About Loans',
        description: 'Free financial education mula sa AI chatbot',
    },
    {
        number: 3,
        icon: 'FileCheck',
        title: 'Apply for Pre-qualification',
        description: 'Answer a simple questionnaire',
    },
    {
        number: 4,
        icon: 'TrendingUp',
        title: 'Get Loan Options',
        description: 'Makita ang mga loan na fit para sa\'yo',
    },
] as const;

// Benefits Section Data
export const BENEFITS = [
    {
        icon: 'Gift',
        title: 'Free & Accessible',
        description: '100% free ang app — walang bayad!',
    },
    {
        icon: 'CheckCircle',
        title: 'No Credit Check',
        description: 'Hindi kailangan ng credit check',
    },
    {
        icon: 'Heart',
        title: 'Filipino-First',
        description: 'Designed especially para sa mga Pinoy',
    },
    {
        icon: 'Sparkles',
        title: 'AI-Powered',
        description: 'Smart matching sa right loan for you',
    },
    {
        icon: 'Lock',
        title: 'Data Privacy',
        description: 'Secure at protected ang data mo',
    },
    {
        icon: 'Users',
        title: 'Community Driven',
        description: 'Tumutulong sa kapwa entrepreneurs',
    },
] as const;

// Testimonials Data
export const TESTIMONIALS = [
    {
        quote: 'Dati ayaw ako pautangin ng bank kasi wala akong credit history. Ngayon nakapag-loan na ako ng ₱15,000 para madagdagan ang stocks ko! Salamat MSME Pathways!',
        name: 'Ate Minda',
        role: 'Sari-sari Store Owner, Tondo',
        rating: 5,
        avatar: '/avatar-1.png',
    },
    {
        quote: 'Simple lang i-navigate ang app kahit hindi ako tech-savvy. Yung AI chatbot nila, patient mag-explain ng mga terms. Sobrang helpful!',
        name: 'Kuya Rodel',
        role: 'Market Vendor, Divisoria',
        rating: 5,
        avatar: '/avatar-2.png',
    },
    {
        quote: 'Nagtitinda ako ng ulam sa bahay. Hindi ko inexpect na may mag-aalok ng loan sa akin. Ngayon may pangdagdag capital na ako para sa aking maliit na negosyo!',
        name: 'Aling Nena',
        role: 'Home-based Seller, Cavite',
        rating: 5,
        avatar: '/avatar-3.png',
    },
] as const;

// Statistics Data
export const STATISTICS = [
    { value: 10000, suffix: '+', label: 'Active Users' },
    { value: 50, prefix: '₱', suffix: 'M+', label: 'Loans Enabled' },
    { value: 4.8, suffix: '/5', label: 'App Rating', decimals: 1 },
    { value: 95, suffix: '%', label: 'Success Rate' },
] as const;

// FAQ Data
export const FAQS = [
    {
        question: 'Free ba talaga ang MSME Pathways?',
        answer: 'Yes, 100% free ang pag-download at paggamit ng MSME Pathways app. Walang hidden charges or subscription fees.',
    },
    {
        question: 'Paano gumagana ang AI chatbot?',
        answer: 'Ang AI chatbot ay tutulong sa\'yo na maintindihan ang mga loan options, magbibigay ng financial education, at gagabayan ka sa buong application process.',
    },
    {
        question: 'Kailangan ba ng credit history?',
        answer: 'Hindi! We use alternative data assessment para i-check ang iyong capability to pay. Kahit walang credit history, pwede ka pa ring mag-apply.',
    },
    {
        question: 'Safe ba ang aking personal information?',
        answer: 'Yes, fully secured ang lahat ng iyong data. We comply with the Data Privacy Act of 2012 at gumagamit kami ng encryption para i-protect ang iyong information.',
    },
    {
        question: 'Paano ako mag-download ng app?',
        answer: 'Available ang MSME Pathways sa Google Play Store. Just search "MSME Pathways" or click the download button sa page na ito.',
    },
    {
        question: 'Available ba sa iOS?',
        answer: 'Currently, available lang sa Android devices. Pero working na kami sa iOS version — coming soon!',
    },
    {
        question: 'Sino ang mga lending partners?',
        answer: 'We partnered with licensed at BSP-registered microfinance institutions at lending companies para ma-ensure na safe at legal ang lahat ng loan options.',
    },
    {
        question: 'Paano kung hindi ako approved?',
        answer: 'Hindi ka bibigyan ng rejection lang — we\'ll provide recommendations kung paano mo ma-improve ang iyong financial profile at mga alternative options na pwede mong i-try.',
    },
] as const;

// Social Links
export const SOCIAL_LINKS = [
    { icon: 'Facebook', href: 'https://facebook.com/msmepathways', label: 'Facebook' },
    { icon: 'Instagram', href: 'https://instagram.com/msmepathways', label: 'Instagram' },
    { icon: 'Linkedin', href: 'https://linkedin.com/company/msmepathways', label: 'LinkedIn' },
] as const;

// Contact Info
export const CONTACT_INFO = {
    email: 'Joshuaco@msmepathways.ph',
    phone: '+63 XXX XXX XXXX',
    address: 'Pangasinan, Philippines',
};

// App Store Links
export const APP_LINKS = {
    playStore: 'https://play.google.com/store/apps/details?id=com.msmepathways',
    appStore: '#', // Coming soon
};

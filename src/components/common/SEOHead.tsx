import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
}

const SEOHead = ({
  title = 'MSME Pathways - AI-Powered Financial Inclusion for Filipino Microentrepreneurs',
  description = 'Walang Credit History? Pwede Ka Pa Rin! Get AI-powered financial guidance and inclusive lending solutions. No credit history required. Built for Filipino microentrepreneurs.',
  keywords = 'MSME, microenterprise, lending, Philippines, AI financial advisor, credit, small business loans, sari-sari store, financial inclusion',
  ogImage = 'https://msmepathways.ph/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl = 'https://msmepathways.ph',
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title

    // Function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let tag = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }
      
      tag.setAttribute('content', content)
    }

    // Standard meta tags
    setMetaTag('description', description)
    setMetaTag('keywords', keywords)
    setMetaTag('author', 'MSME Pathways')
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    setMetaTag('robots', 'index, follow')
    setMetaTag('language', 'English')
    setMetaTag('revisit-after', '7 days')

    // Open Graph tags
    setMetaTag('og:title', title, true)
    setMetaTag('og:description', description, true)
    setMetaTag('og:image', ogImage, true)
    setMetaTag('og:url', canonicalUrl, true)
    setMetaTag('og:type', ogType, true)
    setMetaTag('og:site_name', 'MSME Pathways', true)
    setMetaTag('og:locale', 'en_PH', true)

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard)
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', ogImage)

    // Mobile app meta tags
    setMetaTag('mobile-web-app-capable', 'yes')
    setMetaTag('apple-mobile-web-app-capable', 'yes')
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    setMetaTag('apple-mobile-web-app-title', 'MSME Pathways')

    // Theme color
    setMetaTag('theme-color', '#1565C0')

    // Canonical link
    let linkTag = document.querySelector('link[rel="canonical"]')
    if (!linkTag) {
      linkTag = document.createElement('link')
      linkTag.setAttribute('rel', 'canonical')
      document.head.appendChild(linkTag)
    }
    linkTag.setAttribute('href', canonicalUrl)

    // Structured Data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MSME Pathways',
      description: description,
      url: canonicalUrl,
      logo: `${canonicalUrl}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+63-XXX-XXX-XXXX',
        contactType: 'Customer Service',
        email: 'support@msmepathways.ph',
        availableLanguage: ['English', 'Filipino'],
      },
      sameAs: [
        'https://facebook.com/msmepathways',
        'https://instagram.com/msmepathways',
        'https://linkedin.com/company/msmepathways',
      ],
      areaServed: 'Philippines',
      founder: {
        '@type': 'Organization',
        name: 'MSME Pathways Team',
      },
    }

    let scriptTag = document.querySelector('script[type="application/ld+json"]')
    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      document.head.appendChild(scriptTag)
    }
    scriptTag.textContent = JSON.stringify(structuredData)
  }, [title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl])

  return null
}

export default SEOHead

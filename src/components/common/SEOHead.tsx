import { useEffect, useMemo } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  canonicalUrl?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}

const SEOHead = ({
  title = 'MSME Pathways - AI-Powered Financial Inclusion for Filipino Microentrepreneurs',
  description = 'Walang Credit History? Pwede Ka Pa Rin! Get AI-powered financial guidance and inclusive lending solutions. No credit history required. Built for Filipino microentrepreneurs.',
  keywords = 'MSME, microenterprise, lending, Philippines, AI financial advisor, credit, small business loans, sari-sari store, financial inclusion',
  ogImage = 'https://msmepathways.ph/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl = 'https://msmepathways.ph',
  breadcrumbs = [],
}: SEOHeadProps) => {
  // Create a stable reference for breadcrumbs to avoid unnecessary re-renders
  const breadcrumbsKey = useMemo(() => JSON.stringify(breadcrumbs), [breadcrumbs])

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
    setMetaTag('og:image:width', '1200', true)
    setMetaTag('og:image:height', '630', true)
    setMetaTag('og:image:alt', title, true)
    setMetaTag('og:url', canonicalUrl, true)
    setMetaTag('og:type', ogType, true)
    setMetaTag('og:site_name', 'MSME Pathways', true)
    setMetaTag('og:locale', 'en_PH', true)
    setMetaTag('og:locale:alternate', 'tl_PH', true)

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard)
    setMetaTag('twitter:site', '@msmepathways')
    setMetaTag('twitter:creator', '@msmepathways')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    setMetaTag('twitter:image', ogImage)
    setMetaTag('twitter:image:alt', title)

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

    // Structured Data (JSON-LD) - Organization
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MSME Pathways',
      description: description,
      url: canonicalUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${canonicalUrl}/logo.png`,
        width: '512',
        height: '512',
      },
      image: ogImage,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+63-XXX-XXX-XXXX',
        contactType: 'Customer Service',
        email: 'support@msmepathways.ph',
        availableLanguage: ['English', 'Filipino'],
        areaServed: 'PH',
      },
      sameAs: [
        'https://facebook.com/msmepathways',
        'https://instagram.com/msmepathways',
        'https://linkedin.com/company/msmepathways',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Philippines',
      },
      founder: {
        '@type': 'Organization',
        name: 'MSME Pathways Team',
      },
      knowsAbout: [
        'Microfinance',
        'Small Business Lending',
        'Financial Inclusion',
        'AI Financial Advisory',
        'MSME Support',
      ],
    }

    // WebSite Schema with Search Action
    const websiteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MSME Pathways',
      url: canonicalUrl,
      description: description,
      publisher: {
        '@type': 'Organization',
        name: 'MSME Pathways',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${canonicalUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }

    // Breadcrumb Schema
    const breadcrumbData = breadcrumbs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    } : null

    // Combine all structured data
    const structuredDataArray: Array<Record<string, any>> = [organizationData, websiteData]
    if (breadcrumbData) {
      structuredDataArray.push(breadcrumbData)
    }

    // Remove old script tags
    document.querySelectorAll('script[type="application/ld+json"]').forEach(tag => tag.remove())

    // Add new structured data scripts
    structuredDataArray.forEach((data) => {
      const scriptTag = document.createElement('script')
      scriptTag.setAttribute('type', 'application/ld+json')
      scriptTag.textContent = JSON.stringify(data)
      document.head.appendChild(scriptTag)
    })
  }, [title, description, keywords, ogImage, ogType, twitterCard, canonicalUrl, breadcrumbsKey])

  return null
}

export default SEOHead

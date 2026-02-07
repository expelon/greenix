'use client';

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Greenix Experiences",
    "alternateName": "Greenix Event Management Company",
    "description": "A leading event management company in Kerala offering corporate events, weddings, destination celebrations, and cultural experiences with seamless execution.",
    "url": "https://www.thegreenix.com",
    "logo": "https://www.thegreenix.com/logo.png",
    "image": "https://www.thegreenix.com/logo.png",
    "telephone": "+91 9846020091",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9846020091",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Malayalam"],
      "areaServed": "Kerala",
      "email": "info@thegreenix.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kattadi, 72/2672, Pottakuzhi Lane(West), Kaloor",
      "addressLocality": "Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682026",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9873",
      "longitude": "76.2847"
    },
    "sameAs": [
      "https://www.instagram.com/thegreenix",
      "https://www.facebook.com/greenixofficial",
      "https://www.youtube.com/@GreenixExperiencesPvtLtd",
      "https://www.linkedin.com/company/greenixexperience/"
    ],
    "foundingDate": "2020",
    "areaServed": [
      {
        "@type": "Place",
        "name": "Kerala"
      },
      {
        "@type": "Place", 
        "name": "Ernakulam"
      },
      {
        "@type": "Place",
        "name": "Kochi"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Event Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Management",
            "description": "Professional corporate event planning including conferences, seminars, product launches, exhibitions, and business meetings",
            "url": "https://www.thegreenix.com/services/corporate-events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Planning Services",
            "description": "Complete wedding planning services for traditional, luxury, and destination weddings with vendor management",
            "url": "https://www.thegreenix.com/services/wedding-planners"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Destination Weddings",
            "description": "Luxury destination wedding planning in Kerala with cultural heritage integration",
            "url": "https://www.thegreenix.com/services/destination-weddings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beach Weddings",
            "description": "Romantic beach wedding planning and coordination in Kerala",
            "url": "https://www.thegreenix.com/services/beach-wedding"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Parties",
            "description": "Exclusive private party planning and event management",
            "url": "https://www.thegreenix.com/services/private-party"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Music & Entertainment",
            "description": "Professional music and entertainment services for events",
            "url": "https://www.thegreenix.com/services/music-entertainment"
          }
        }
      ]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "9.9873",
        "longitude": "76.2847"
      },
      "geoRadius": "100"
    },
    "knowsAbout": [
      "Event Management",
      "Wedding Planning",
      "Corporate Events",
      "Destination Weddings",
      "Kerala Heritage Events",
      "Cultural Events",
      "Beach Weddings",
      "Private Parties",
      "Music Entertainment"
    ],
    "slogan": "Crafting unforgettable experiences blending Kerala's heritage with modern innovation"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Greenix Experiences",
    "url": "https://www.thegreenix.com",
    "description": "A leading event management company in Kerala offering corporate events, weddings, destination celebrations, and cultural experiences with seamless execution.",
    "publisher": {
      "@type": "Organization",
      "name": "Greenix Experiences",
      "url": "https://www.thegreenix.com"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Greenix Experiences",
    "description": "Premier event management company in Kerala specializing in corporate events, weddings, and cultural celebrations",
    "url": "https://www.thegreenix.com",
    "telephone": "+91 9846020091",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kattadi, 72/2672, Pottakuzhi Lane(West), Kaloor",
      "addressLocality": "Ernakulam",
      "addressRegion": "Kerala",
      "postalCode": "682026",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 09:00-21:00",
    "priceRange": "$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "INR"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of events does Greenix Experiences specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We curate a wide spectrum of events—from high-impact corporate gatherings like leadership summits and dealer meets to private island celebrations, weddings, and intimate functions—all infused with Kerala's cultural richness."
        }
      },
      {
        "@type": "Question",
        "name": "How is Kerala's culture integrated into the events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From traditional Kathakali performances and Kalaripayattu displays to fragrant jasmine canopies and chenda drumming processions, we seamlessly weave Kerala's heritage into every event touchpoint."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of team-building experiences do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our signature experience is the thrilling Chundanvallam Snakeboat Race—an unforgettable team-building activity that promotes coordination, camaraderie, and pure adrenaline."
        }
      },
      {
        "@type": "Question",
        "name": "Can you organize cultural tours or heritage experiences alongside events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. We offer curated city tours, heritage walks, and immersive experiences to help your guests connect with Kerala's soul beyond the event setting."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with logistics and on-ground execution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply reach out to us via our contact page or call us directly. We'll schedule a discovery session to understand your vision, then bring it to life with our signature cultural finesse."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

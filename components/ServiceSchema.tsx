'use client';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: string;
}

export default function ServiceSchema({ 
  serviceName, 
  description, 
  url, 
  price = "Contact for pricing",
  areaServed = "Kerala"
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": `https://www.thegreenix.com${url}`,
    "provider": {
      "@type": "Organization",
      "name": "Greenix Experiences",
      "url": "https://www.thegreenix.com",
      "telephone": "+91 9846020091",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kattadi, 72/2672, Pottakuzhi Lane(West), Kaloor",
        "addressLocality": "Ernakulam",
        "addressRegion": "Kerala",
        "postalCode": "682026",
        "addressCountry": "IN"
      }
    },
    "serviceType": "Event Management",
    "areaServed": areaServed,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": description
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": price,
            "priceCurrency": "INR"
          },
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

'use client';

interface BlogSchemaProps {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  author?: string;
  image?: string;
}

export default function BlogSchema({ 
  title, 
  description, 
  url, 
  publishDate, 
  author = "Greenix Team",
  image = "/logo.png" 
}: BlogSchemaProps) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": `https://www.thegreenix.com${image}`,
    "url": `https://www.thegreenix.com${url}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": "Greenix Experiences",
      "url": "https://www.thegreenix.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Greenix Experiences",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thegreenix.com/logo.png",
        "width": 1200,
        "height": 630
      },
      "url": "https://www.thegreenix.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.thegreenix.com${url}`
    },
    "articleSection": "Event Planning",
    "keywords": "event management, wedding planning, corporate events, kerala events, destination weddings"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
}

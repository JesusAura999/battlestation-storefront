import React from "react";
import { PRODUCTS } from "@/data/products";

const BASE_URL = "https://battlestation-storefront.vercel.app";

export default function ProductStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Battlestation Supply Co.",
    url: BASE_URL,
    logo: `${BASE_URL}/products/brand_profile_avatar_1789951106316.jpg`,
    sameAs: [
      "https://www.tiktok.com/@battlestationsupplyco",
      "https://www.instagram.com/battle.stationssupply",
      "https://www.youtube.com/@BattlestationSupply"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["en"]
    }
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Battlestation Supply Co. Complete Hardware & Digital Workspace Catalog",
    description: "Curated engineering-grade physical desk hardware, topographic desk mats, and Notion Developer Operating Systems.",
    url: `${BASE_URL}/#products`,
    hasPart: PRODUCTS.map((product) => ({
      "@type": "Product",
      "@id": `${BASE_URL}/#${product.id}`,
      name: product.title,
      description: product.description,
      image: product.imageUrl.startsWith("http")
        ? product.imageUrl
        : `${BASE_URL}${product.imageUrl}`,
      category: product.category,
      brand: {
        "@type": "Brand",
        name: "Battlestation Supply Co."
      },
      offers: {
        "@type": "Offer",
        price: product.price.toFixed(2),
        priceCurrency: "USD",
        availability: product.inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        url: `${BASE_URL}/#products`,
        priceValidUntil: "2027-12-31"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating.toString(),
        reviewCount: product.reviewsCount.toString(),
        bestRating: "5",
        worstRating: "1"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
    </>
  );
}

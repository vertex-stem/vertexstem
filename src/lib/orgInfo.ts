export const ORG_ADDRESS = "94 Laird Dr, Unit 220, East York, ON M4G 3V2";
export const ORG_PHONE = "(647) 335 3620";
export const ORG_EMAIL = "office@vertexstem.ca";
export const ORG_MAP_EMBED_SRC =
  "https://www.google.com/maps?q=94+Laird+Dr+Unit+220,+East+York,+ON+M4G+3V2&output=embed";

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "Vertex STEM Education",
  url: "https://vertexstem.ca",
  telephone: "+1-647-335-3620",
  email: ORG_EMAIL,
  image: "https://vertexstem.ca/images/og-image.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "94 Laird Dr, Unit 220",
    addressLocality: "East York",
    addressRegion: "ON",
    postalCode: "M4G 3V2",
    addressCountry: "CA",
  },
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old whizzo.com WordPress structure -> new IA
      { source: "/products", destination: "/business/materials-science", permanent: true },
      { source: "/products/:path*", destination: "/business/materials-science", permanent: true },
      { source: "/technical-textiles", destination: "/business/materials-science/technical-textiles", permanent: true },
      { source: "/fashion-textile", destination: "/business/materials-science/engineered-fashion", permanent: true },
      { source: "/yarn", destination: "/business/materials-science/yarn", permanent: true },
      { source: "/fiber", destination: "/business/materials-science/fiber", permanent: true },
      { source: "/services", destination: "/business/services/design", permanent: true },
      { source: "/services-contract-research", destination: "/business/services/research", permanent: true },
      { source: "/privacy-policy-2", destination: "/business/legal/privacy", permanent: true },
      { source: "/terms", destination: "/business/legal/terms", permanent: true },
      { source: "/cookies", destination: "/business/legal/cookies", permanent: true },
      { source: "/r-and-d", destination: "/works", permanent: true },
      { source: "/rd", destination: "/works", permanent: true },
      { source: "/about", destination: "/business/about", permanent: true },
      { source: "/esg", destination: "/business/esg", permanent: true },
      { source: "/career", destination: "/business/career", permanent: true },
      { source: "/careers", destination: "/business/career", permanent: true },
      { source: "/contact", destination: "/business/contact", permanent: true },
      { source: "/news", destination: "/business/news", permanent: true },

      // Dead WordPress theme-demo content (7 Lorem Ipsum posts + 2 empty categories)
      { source: "/blog", destination: "/business/news", permanent: true },
      { source: "/blog/:path*", destination: "/business/news", permanent: true },
      { source: "/category/:path*", destination: "/business/news", permanent: true },
      { source: "/2023/:path*", destination: "/business/news", permanent: true },
      { source: "/2024/:path*", destination: "/business/news", permanent: true },

      // whizzo.work old flat structure
      { source: "/research", destination: "/works/research", permanent: true },
      { source: "/corporate-site", destination: "/business", permanent: true },

      // The RFQ form was removed — send it to the Contact page instead.
      { source: "/wow/rfq", destination: "/wow/contact", permanent: true },
    ];
  },
};

export default nextConfig;

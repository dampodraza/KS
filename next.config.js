/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['blog.kasiapodraza.pl'],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: (process.env.ANALYZE = 'false'),
});

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces ./out for GitHub Pages.
  output: 'export',

  // This is a user site (raymartsalvador.github.io) served from the domain
  // root, so no basePath/assetPrefix is needed.

  // next/image optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },

  // Emit /work/ instead of /work.html so links resolve cleanly on Pages.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;

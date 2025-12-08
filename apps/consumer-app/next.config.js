/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable modern image formats for better compression
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 60 seconds minimum
    minimumCacheTTL: 60,
    // Disable SVG optimization (we're using JPGs)
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;

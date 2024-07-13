/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
        },
      ],
      unoptimized:true
    },
    async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
      return {
        '/': { page: '/' },
        // เพิ่ม paths อื่น ๆ ถ้าจำเป็น
      };
    },
    output: 'export', // เพิ่มการตั้งค่านี้เพื่อทำการ export
    distDir: 'dist', // กำหนดไดเรกทอรีที่ต้องการส่งออกที่นี่
};


export default nextConfig;
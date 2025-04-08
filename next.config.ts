import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // dirs: ['app', __dirname], // 指定 ESLint 检查的目录
    dirs: ['app'], // 指定 ESLint 检查的目录
  },
  typescript: {
    // 仅当需要自定义时启用
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json', // 显式指定路径
  },
};

console.log('===', __dirname);

export default nextConfig;

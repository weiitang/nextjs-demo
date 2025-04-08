import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // 指定了dirs时，即使使用 --file指定文件  下面的dirs里的目录文件也会被检查
  // eslint: {
  //   // dirs: ['app', __dirname], // 指定 ESLint 检查的目录
  //   dirs: ['app/seed'], // 指定 ESLint 检查的目录
  // },
  typescript: {
    // 仅当需要自定义时启用
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json', // 显式指定路径
  },
};

export default nextConfig;

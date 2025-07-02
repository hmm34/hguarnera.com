/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/hguarnera.com' : '',
  assetPrefix: isProd ? '/hguarnera.com/' : '',
};

export default nextConfig;

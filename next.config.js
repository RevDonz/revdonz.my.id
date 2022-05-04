/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
};

module.exports =
  process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig);

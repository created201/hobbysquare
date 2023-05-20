/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    trailingSlash: true,

    images: {
        domains: [],
    },

    experimental: {},
}

module.exports = nextConfig

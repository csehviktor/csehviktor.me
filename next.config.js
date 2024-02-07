/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WS_ENDPOINT: process.env.WS_ENDPOINT
    }
}

module.exports = nextConfig

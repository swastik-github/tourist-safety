/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    GOOGLE_MAPS_API_KEY: 'AIzaSyBqLzEIi3MgZ4R3aRQ7Jcd630qN57eI1Ic',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    GOOGLE_MAPS_API_KEY:'AIzaSyBqLzEIi3MgZ4R3aRQ7Jcd630qN57eI1Ic',
    staticFolder: '/static',
  },
}

module.exports = nextConfig

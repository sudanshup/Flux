/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me",
            },

        ],
    },
    experimental: {
        appDir: true, // <-- Add this if not already
        serverActions: {
            bodySizeLimit: "5mb",
        },
      }, 
};

export default nextConfig;

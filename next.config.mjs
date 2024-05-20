/** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;

import withPWA from "next-pwa";

export default withPWA({
  // next.js config
  dest: "public",
});

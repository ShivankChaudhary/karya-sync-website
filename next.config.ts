// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Static export for S3
  output: "export",

  // Required for static hosting (S3 does not support image optimization)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
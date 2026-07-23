import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /waitlist and /beta were live, indexed URLs (and /beta was advertised in
      // public/llms.txt) until self-serve trials opened. They redirect to the
      // homepage rather than to app.getvyral.io so the link equity stays on
      // this domain.
      //
      // `statusCode: 301` rather than `permanent: true` on purpose: the latter
      // emits 308, and these are indexed GET URLs where the classic 301 is what
      // every crawler and SEO tool expects.
      { source: "/waitlist", destination: "/", statusCode: 301 },
      { source: "/beta", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;

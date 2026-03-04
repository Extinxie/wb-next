import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // потом короче
};


const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)

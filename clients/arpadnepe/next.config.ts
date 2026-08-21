import path from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // A repó több klienskönyvtárat tartalmaz — a gyökeret rögzítjük, hogy a
  // Turbopack ne a repón kívüli lockfile-t keresse.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

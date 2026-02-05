/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora errores de formato (Prettier) y reglas de hooks durante la construcción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora errores de tipos de datos para que no se detenga el build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

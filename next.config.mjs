/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    images: {
        unoptimized: true, // отключает Next Image optimization (требует сервер)
    },
    trailingSlash: true, // делает ссылки вида /about/ (иначе будет /about)
    basePath: process.env.NODE_ENV === 'production' ? '/raf_console_studio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/raf_console_studio/' : '',
};

export default nextConfig;
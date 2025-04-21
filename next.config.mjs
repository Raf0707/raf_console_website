/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 💥 важно для GitHub Pages
    images: {
        unoptimized: true, // отключает Next Image optimization (требует сервер)
    },
    trailingSlash: true, // делает ссылки вида /about/ (иначе будет /about)
    basePath: "/raf_console_studio", // ⚠️ имя репозитория (без username)
};

export default nextConfig;
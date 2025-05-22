postcss.config.cjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Next.js expects the string 'tailwindcss' and will resolve it
    autoprefixer: {}, // Next.js expects the string 'autoprefixer' and will resolve it
  },
};

module.exports = config;

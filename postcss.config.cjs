// postcss.config.cjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    // Ensure you have these packages installed:
    // npm install -D @tailwindcss/postcss autoprefixer
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};

module.exports = config;
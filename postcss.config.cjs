/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: require('@tailwindcss/postcss'),
    autoprefixer: {},
  },
};

// Use CommonJS export syntax for .cjs files
module.exports = config;
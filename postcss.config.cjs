/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: require('@tailwindcss/postcss'),
    autoprefixer: {},
  },
};

export default config;
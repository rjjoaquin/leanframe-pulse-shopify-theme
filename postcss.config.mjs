export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./assets/**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
    },
    autoprefixer: {},
  },
};

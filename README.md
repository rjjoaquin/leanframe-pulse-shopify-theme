# LeanFrame Pulse v1.0

Shopify Theme with Tailwind, Lucide Icons, and AlpineJs\
Modern design, without the bloat.

## How to Initialize

1. `npm init -y`
2. `npm install -D tailwindcss @tailwindcss/postcss autoprefixer postcss postcss-cli`
3. Create the postcss.config.mjs file
   \
   Using code below

```export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: ["./assets/**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
    },
    autoprefixer: {},
  },
};
```

# Custom JS:

1. Use Alpine JS as much as possible
2. For custom javascript Use the `{% javascript %}` liquid tag \
   Otherwise, add the script below the section file and ensure it has defer and the **handleize** section id. Sample: `<script src="filesource" data-section-id="{{ section.id | handleize }}" defer>`

# Custom CSS:

Use Tailwind as much as possible. Otherwise follow the below rules:\

1. Use the `{% stylesheet %}` liquid tag. \
   Otherwise, use Alpine x-init or (not recommended) inject the CSS `<link />` on a section through Custom JS. Load the CSS stylesheet via CSS:

```if (!document.querySelector('link[href="filesource"]')) {
  document.head.insertAdjacentHTML('beforeend', `<link data-added-css rel="stylesheet" href="filesource" />`)
};
```

2. Create the .css file in the assets
3. change .css to the liquid `{{ 'filesource.css' | asset_url }}` you created
4. Use Alpine x-init or (not recommended) create the .js file in the section and add the script

5. For section specific CSS that pulls from theme editor section settings, add style {% style %}

This ensures no duplicate `<style>` is loaded into the page. Especially when inserting multiple instances of the same section

# Development

1. Always run `npm run dev` or `npm run build` before development
2. On a seperate terminal run the `shopify theme dev` as usual

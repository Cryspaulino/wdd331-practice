module.exports = {
  plugins: [
    require("postcss-import"),
    require("cssnano")({ preset: "default" })
  ]
};

    // "build": "lightningcss css/main.css -o dist/styles.css --bundle --minify",
    // "dev": "lightningcss css/main.css -o dist/styles.css --minify",
module.exports = {
  map: false,
  plugins: [
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-extend"),
    require("postcss-nested"),
    require("postcss-mixins")
  ]
}

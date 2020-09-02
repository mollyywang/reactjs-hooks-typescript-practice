const path = require("path")
function resolve(dir) {
  return path.join(__dirname, `./${dir}`)
}
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    "@": resolve("src")
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars:{
      "@font-size-base": "16px"
    }
  })
)

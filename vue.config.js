module.exports = {
  "configureWebpack": {
    "resolve": {
      "alias": {
        "assets": "@/assets",
        "commonjs": "@/commonjs",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    },
  },
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://192.168.43.111:8080",
        "changeOrigin": true,
        "pathRewrite": {
          "^/api": ""
        }
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
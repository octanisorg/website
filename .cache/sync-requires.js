// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Volumes/Serendipity/Repositories/Octanis/website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Volumes/Serendipity/Repositories/Octanis/website/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Volumes/Serendipity/Repositories/Octanis/website/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/dev-404-page.json"),
  "404.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/404.json"),
  "index.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/index.json"),
  "page-2.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/page-2.json"),
  "404-html.json": require("/Volumes/Serendipity/Repositories/Octanis/website/.cache/json/404-html.json")
}
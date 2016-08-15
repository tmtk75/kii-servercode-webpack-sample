import WebPage from "./webpage.js"

export function page_size(params, ctx, done) {
  WebPage.URLs(["http://www.yahoo.co.jp/", "https://twitter.com/", "https://www.facebook.com"])
    .fetch()
    .then((ress) => ress.map((e) => e.length))
    .then((lens) => done(lens))
    .catch((err) => done(err));
}

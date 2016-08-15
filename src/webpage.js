export default class WebPage {
  constructor(urls) {
    this.urls = urls;
  }

  fetch() {
    return Promise.all(this.urls.map(e => $.ajax(e)))
  }

  static URLs(urls) {
    return new WebPage(urls);
  }
}


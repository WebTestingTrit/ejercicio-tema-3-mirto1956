const puppeteer = require(`puppeteer`);

let browser = null;
exports.GetBrowser = async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 768, height: 1024 },
      devtools: false
    });
  }
  return browser;
};

exports.CloseBrowser = async function close(browser) {
  await browser.close();
};

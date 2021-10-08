const { GetBrowser, CloseBrowser } = require('./puppets');

async function test() {
  const browser = await GetBrowser();
  const pagePuppet = await browser.newPage();
  await pagePuppet.goTo('https://www.timeanddate.com/worldclock/tu-pais/tu-ciudad', {
    waitUntil: 'load'
  });
  await CloseBrowser(browser);
}

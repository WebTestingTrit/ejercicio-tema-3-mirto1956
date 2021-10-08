const { GetBrowser } = require('../../lib/puppets');

const emulation = require('./emulation');
async function testEmulation() {
  const browser = await GetBrowser();
  const pagePuppet = await browser.newPage();

  await emulation(pagePuppet);
}

testEmulation();

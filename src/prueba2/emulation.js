const { given, when, then } = require('../lib/bit.tester');

module.exports = async function (pagePuppet) {
  await given(`Any page of my site`, async () => {
    const inputPageUrl = 'https://www.timeanddate.com/worldclock/tu-pais/tu-ciudad';
    const inputUserAgent =
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
    await pagePuppet.setUserAgent(inputUserAgent);
  });
};

const program = require('commander');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const takeScreenshot = async (blockName, selector, imgPath, clickSelector = null) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:8080/content/${blockName}/${blockName}.html`);

  if (clickSelector) {
    const clickElement = await page.$(clickSelector);
    if (clickElement) {
      await clickElement.click();
    }
  }

  const rect = await page.evaluate((query) => {
    const element = document.querySelector(query);
    const { x, y, width, height } = element.getBoundingClientRect();
    return {
      x, y, width, height,
    };
  }, selector);

  const screenshot = await page.screenshot({ clip: rect });
  fs.writeFileSync(imgPath, screenshot);
  console.log('\u0007');

  process.exit();
};

program.command('screenshot <blockName>')
  .option('-c, --click <selector>', 'element selector to simulate click on')
  .action((blockName, options) => {
    const dir = path.resolve(__dirname, 'snapshots');
    takeScreenshot(blockName, `.${blockName}`, path.join(dir, `${blockName}.png`), options.click);
  });

program.parse(process.argv);

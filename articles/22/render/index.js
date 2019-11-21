const puppeteer = require("puppeteer");

async function generateImage() {
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();

  await page.goto(`file://${__dirname}/../react-project/build/index.html`);
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: "./myAwesomeImage.png" });
  await browser.close();

}

generateImage();
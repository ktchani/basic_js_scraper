const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const [destructured_element] = await page.$x('//*[@id="ebooksImgBlkFront"]');
    const src = await destructured_element.getProperty('src');
    const srcTxt = await src.jsonValue();
    if (srcTxt.includes('https')) {
        console.log('it is true');
    } else {
        console.log('not true');
    }
    console.log({srcTxt});
    browser.close();
}

scrapeProduct("https://www.amazon.ca/dp/B07D23CFGR/ref=s9_acsd_hps_bw_c2_x_2_i?pf_rd_m=A1IM4EOPHS76S7&pf_rd_s=merchandised-search-5&pf_rd_r=0DRJ8Q9BNV7PXQK1YJRF&pf_rd_t=101&pf_rd_p=726c40f6-64f8-4650-933b-0760e63f6d34&pf_rd_i=2980423011");
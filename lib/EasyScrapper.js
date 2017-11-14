const Scrapper = require('./Scrapper');

class EasyScrapper {
    static async scrap(browser, options) {
        const page = await browser.newPage();

        const data = await Scrapper.scrap(page, options);

        await page.close();
        return scrapData;
    }
}

module.exports = EasyScrapper;

class Scrapper {
    static async scrap(page, options) {
        if(options.mode === 'multiple') {
            Scrapper.scrapSingle(page, options);
        }
    }
}

module.exports = Scrapper;

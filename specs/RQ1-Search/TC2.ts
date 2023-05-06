import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';

describe('RQ1-TC2', () => {
    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for "shirt" phrase.', async () => {;
        const searchedPhrase = 'SHIRT';
        header.searchForPhrase(searchedPhrase);
        const resultsForSearchedPhrase = 'SEARCH RESULTS FOR: ' + (searchedPhrase);
        await expect(content.pageTitle).toHaveText(resultsForSearchedPhrase);
        const produkty = await $$('.entry-title a').length;
        console.log("Na stronie znajduje się "+produkty+" produktów. +++++++++++++++++++++++++");
    });
});
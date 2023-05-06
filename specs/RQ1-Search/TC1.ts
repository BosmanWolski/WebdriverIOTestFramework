import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';
import Page from '../../pageobjects/page';

describe('RQ1-TC1', () => {

    let page: Page;

    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for "konto" phrase.', async () => {;
        header.searchForPhrase('konto');
        const nothingFound = 'NOTHING FOUND';
        const nothingMatched = 'Sorry, but nothing matched your search terms. Please try again with some different keywords.';
        await expect(content.pageTitle).toHaveText(nothingFound);
        await expect(content.pageContent).toHaveText(nothingMatched);
    });
});
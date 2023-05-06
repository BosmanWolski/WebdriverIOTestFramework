import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';

describe('RQ1-TC3', () => {
    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for "Amari Shirt" phrase.', async () => {;
        const searchedPhrase = 'AMARI SHIRT';
        header.searchForPhrase(searchedPhrase);
        const resultsForSearchedPhrase = 'SEARCH RESULTS FOR: ' + (searchedPhrase);
        await expect(content.pageTitle).toHaveText(resultsForSearchedPhrase);
        
        const lowerCaseAllWordsExceptFirstLetters = string =>
        string.replaceAll(/\S*/g, word =>
         `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
        );
        const searchedPhraseToLowerCase = lowerCaseAllWordsExceptFirstLetters(searchedPhrase);
        await expect(content.productTitle).toHaveText(searchedPhraseToLowerCase);

        // Czy na stronie znajduje się tylko jeden produkt.
        const secondProduct = $$('.entry-title a')[1];
        await expect(secondProduct).not.toExist();
    });
});
import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';

const searchedPhrase1 = 'Marcara Sleeveless Dress';
const searchedPhrase2 = 'Alani T-Shirt';
const searchedPhrase3 = 'Little Black Top';
const expectedPrice = '135 zł';

describe('RQ2-TC2', () => {
    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for a products and add to cart.', async () => {;
        //Koszyk został zaktualizowany.
        await content.addProductToCart(searchedPhrase1, 1);
        await content.addProductToCart(searchedPhrase2, 2);
        await content.addProductToCart(searchedPhrase3, 3);
        await expect (header.cartSum).not.toHaveText('My Cart - zł 0');
    });

    it('Step 3 - Enter the cart.', async () => {;
        await header.cartSum.click();
        await expect (content.cartSubTotal).toHaveText(expectedPrice);
    });
});
import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';

const searchedPhrase = 'Marcara Sleeveless Dress';

describe('RQ2-TC1', () => {
    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for a product.', async () => {;
        header.searchForPhrase(searchedPhrase);
        await expect(content.productTitle).toHaveText(searchedPhrase);
        await (await content.productTitle).click();
        await expect (content.addToCartButton).toBeDisplayed();
    });

    it('Step 3 - Add 1 product to the cart.', async () => {;
    await content.addToCartQuantity.setValue(1);
    await (await content.addToCartButton).click();
    await expect (header.cartSum).toHaveText('My Cart - zł 55.00');
    });

    it('Step 4 - Enter the cart.', async () => {;
    await header.cartSum.click();
    await expect (content.cartProductName).toHaveText(searchedPhrase);
    await expect (content.productTotal).toHaveText('55 zł');
    });
});
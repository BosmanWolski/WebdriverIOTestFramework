import header from '../../pageobjects/header.js';
import content from '../../pageobjects/content.js';

const searchedPhrase1 = 'Marcara Sleeveless Dress';
const searchedPhrase2 = 'Alani T-Shirt';
const expectedPrice = '120 zł';

describe('RQ2-TC3', () => {
    it('Step 1 - Enter shop.', async () => {
        await browser.url('http://skleptest.pl/');
        browser.maximizeWindow();
        expect(header.siteTitle).toBeDisplayed();
    });

    it('Step 2 - Search for a products and add to cart.', async () => {;
        await content.addProductToCart(searchedPhrase1, 1);
        await content.addProductToCart(searchedPhrase2, 2);
        await expect (header.cartSum).not.toHaveText('My Cart - zł 0');
    });

    it('Step 3 - Enter the cart. Perform operations on cart.', async () => {;
        await header.cartSum.click();
        await $('//tbody/tr[1]/td[5]/div[1]/div[1]/a[2]/span[1]').click();
        await $('//tbody/tr[2]/td[5]/div[1]/div[1]/a[1]/span[1]').click();
        await content.updateCart();
        await expect (content.cartSubTotal).toHaveText(expectedPrice);
    });
});
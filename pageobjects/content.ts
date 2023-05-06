import header from './header.js';
import Page from './page.js';
import { Key } from 'webdriverio';

class content extends Page {
    public get homepageLink () {
        return $('*=Shop');
    }

    public get siteContent () {
        return $('.site-content');
    }

    public get pageTitle () {
        return $('.page-title');
    }

    public get pageContent () {
        return $('.page-content p');
    }

    public get productsList () {
        return $('.site-main');
    }

    public get productTitle () {
        return $('.entry-title a');
    }

    public get addToCartButton () {
        return $('.single_add_to_cart_button');
    }

    public get addToCartQuantity () {
        return $('.input-text');
    }
 
    public get productPrice () {
        return $('p.price .woocommerce-Price-amount');
    }

    public get productPriceInCart () {
        return $$('.product-price .woocommerce-Price-amount');
    }

    public get productTotalPriceInCart () {
        return $$('.product-subtotal .woocommerce-Price-amount');
    }

    public get addedToCartMessage () {
        return $('.woocommerce-message');
    }

    public get cartProductName () {
        return $('.product-name a');
    }

    public get productTotal () {
        return $('td.product-subtotal');
    }

    public get cartSubTotal () {
        return $('.cart-subtotal .woocommerce-Price-amount');
    }

    public get addQuantityButton () {
        return $('.arrow-up');
    }

    public get substractQuantityButton () {
        return $('.arrow-down');
    }

    public get updateCartButton () {
        return $('[name="update_cart"]');
    }

    public async enterMainPage () {
      await (await this.homepageLink).click();
    }

    public async addProductToCart (phrase: string, quantity: number) {
        await (await header.searchBar).click();
        await (await header.searchBar).setValue(phrase);
        await browser.keys([Key.Enter]);
        await (await this.productTitle).click();
        await (await this.addToCartQuantity).setValue(quantity);
        await (await this.addToCartButton).click();
        await expect (this.addedToCartMessage).toBeDisplayed();
    }

    public async updateCart () {
        await (await this.updateCartButton).click();
    }
}

export default new content();

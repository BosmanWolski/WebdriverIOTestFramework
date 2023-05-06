import Page from './page.js';
import { Key } from 'webdriverio'

class header extends Page {

    public get logInPageLink () {
        return $('a[href$="https://skleptest.pl/my-account/"]');
    }

    public async navigateToLogInPage() {
        await (await this.logInPageLink).click();
    }

    public get siteTitle () {
        return $('.site-title');
    }

    public get searchBar () {
        return $('.search-field-top-bar');
    }

    public get cartSum () {
        return $('.top-cart a');
    }

    public async searchForPhrase (phrase: string) {
        await (await this.searchBar).click();
        await (await this.searchBar).setValue(phrase);
        await browser.keys([Key.Enter]);
    }
}

export default new header();

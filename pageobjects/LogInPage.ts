import Page from './page.js';


class LogInPage extends Page {
    
    get username () { 
        return $('#username'); 
    }

    get password () { 
        return $('#password'); 
    }

    get submitBtn () { 
        return $('[name="login"]'); 
    }

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

    public async enterMainPage () {
      await  (await this.homepageLink).click();
    }

    public async typeUsername (username: string) {
        await (await this.username).click();
        await (await this.username).setValue(username);
    }

    public async typePassword (password: string) {
        await (await this.password).click();
        await (await this.password).setValue(password);
    }


    public async userLogIn (username: string , password: string) {
        await (await this.username).click();
        await (await this.username).setValue(username);
        await (await this.password).click();
        await (await this.password).setValue(password);
        await (await this.submitBtn).click();
    }
}

export default new LogInPage();

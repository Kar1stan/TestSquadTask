import { ChainablePromiseElement } from 'webdriverio';

class MainPage {
    get APIBtn(){
        return $("//a[text()='API']")
    }

    async clickAPIBtn(){
        await this.APIBtn.click()
    }

    async visitUrl(){
        await browser.url("/");
    }
}
export default new MainPage();
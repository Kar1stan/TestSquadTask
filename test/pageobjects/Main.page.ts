class MainPage {
    get navigationButton(){
        return $("//button[@aria-label='Toggle navigation bar']")
    }

    get APIBtn(){
        return $("//a[@class='menu__link' and text()='API']")
    }

    async clickAPIBtn(){
        await this.APIBtn.click()
    }

    async clickNavigationButton(){
        await this.navigationButton.click()
    }


    async visitUrl(){
        await browser.url("/");
    }
}
export default new MainPage();
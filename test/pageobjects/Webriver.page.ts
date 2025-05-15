import { ChainablePromiseElement } from 'webdriverio';


class WebdriverPage {
    get introductionHeader(){
        return $("//h1[text()='Introduction']")
    }

    get introductionLabel(){
        return $("//span[text()='Introduction']")
    }

     get webdriverLink(){
        return $("a[href='/docs/api/webdriver']")
    }

     get searchInput(){
        return $("//span[text()='Search']")
    }

    get searchInputActive(){
        return $("input[type='search']")
    }

     get xSign(){
        return $("path[d='M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z']")
    }

    get APIReference(){
        return $("//a[text()='API Reference']")
    }

    get protocolCommandsBtn(){
        return $("//div[text()='Protocol Commands']")
    }

      get webdriverProtocalHeader(){
        return $("//h2[text()='WebDriver Protocol']")
    }


    async clickAndFillSearch(text: string){
        await this.searchInput.click();
        await this.searchInputActive.setValue(text);
    }

     async closeSearch(){
        await this.xSign.click();
    }

    async scrollAPIReference(){
       await this.APIReference.scrollIntoView();
    }

    async clickProtocolCommandsBtn(){
        await this.protocolCommandsBtn.click();
    }

}
export default new WebdriverPage();
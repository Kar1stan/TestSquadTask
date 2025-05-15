import WebdriverPage from  '../pageobjects/Webriver.page';
import MainPage from  '../pageobjects/Main.page';

describe('Webriver.io test', () => {
    beforeEach(() => {
        MainPage.visitUrl();
        MainPage.clickAPIBtn();
    })

    it('Should check if Introduction header and label are displayed', async () => {
        await expect (WebdriverPage.introductionHeader).toBeDisplayed();
        await expect (WebdriverPage.introductionLabel).toBeDisplayed();
    });

    it('Should check if WebDriver link is active', async () => {
        await expect (WebdriverPage.webdriverLink).toHaveAttribute('href', '/docs/api/webdriver');
    });

    it('Should check Search input', async () => {
        await WebdriverPage.clickAndFillSearch("all is done")
        await WebdriverPage.closeSearch()
    });

     it('Should check API Reference', async () => {
        await WebdriverPage.scrollAPIReference()
        await expect (WebdriverPage.APIReference).toBeDisplayed()
    });

    it('Should check if Protocal Commands is active', async () => {
        await expect (WebdriverPage.protocolCommandsBtn).toBeClickable()
    });

    it('Should check if Webdriver Protocol header is displayed', async () => {
        await WebdriverPage.webdriverProtocalHeader.waitUntil(async()=>{
            return (await expect (WebdriverPage.webdriverProtocalHeader).toBeDisplayed(),{timeout: 2000,timeoutMsg: 'expected to be displayed after 2s'})
        })
    });


});
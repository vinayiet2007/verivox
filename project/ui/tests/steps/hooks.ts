import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { BasePage } from "../../common/webActions/basePage";
import { LaunchOptions } from "@playwright/test";
let basePage: BasePage;
setDefaultTimeout(50000);
Before(async()=>{
     let cookies = [
        {
        name:'cookie_consent',
        value:'{"Funk":1,"Mktg":1,"Cmpg":1,"SubP":1,"Prtn":1,"Efu":1,"pt":1,"SfoB":1,"opE":1,"scA":1,"ga":1,"yt":1,"at":1,"OfE":1}',
        domain:'.verivox.de',
        path:'/',
        secure: false,
    }];
    basePage = new BasePage();
    const browserOptions: LaunchOptions = {
        slowMo: 0,
        headless: process.env.HEADLESS === 'true' || false
    };
    basePage = await BasePage.init("chromium", browserOptions, {
        viewport: { width: 1400, height: 800 }
      },cookies);
});
After(async()=>{
    await basePage.closePage();
});
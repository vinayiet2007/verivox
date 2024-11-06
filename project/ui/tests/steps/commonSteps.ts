import { Before, Given, When } from "@cucumber/cucumber";
import { BasePage } from "../../common/webActions/basePage";
import { CommonPageElements } from "../../pages/commonPage";

let basePage: BasePage;
let commonPageElements:CommonPageElements;

Before(()=>{
    basePage = new BasePage();
    commonPageElements = new CommonPageElements();
});

Given("user is on the start page", async () => {
    let cookies = [
        {
        name:'cookie_consent',
        value:'{"Funk":1,"Mktg":1,"Cmpg":1,"SubP":1,"Prtn":1,"Efu":1,"pt":1,"SfoB":1,"opE":1,"scA":1,"ga":1,"yt":1,"at":1,"OfE":1}',
        domain:'https://www.verivox.de/',
        path:'/'
    }];
    await basePage.navigateToUrl("https://www.verivox.de/");
    await basePage.accept();
    
    console.log("User is on the start page");
    
});
When("user chose the Kredit product",async()=>{
    await commonPageElements.openKreditModule();
});
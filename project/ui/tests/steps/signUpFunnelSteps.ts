import { Before, Then, When } from "@cucumber/cucumber";
import { ComparisonResultsPage } from "../../pages/comparisonResultsPage";
import { KreditModulePage } from "../../pages/kreditModulePage";
import { CommonPageElements } from "../../pages/commonPage";
import { SignFunnelPage } from "../../pages/signUpFunnelPage";
import { expect } from "@playwright/test";

let comparisonResultsPage : ComparisonResultsPage;
let commonPageElements : CommonPageElements;
let signFunnelPage : SignFunnelPage;

Before(()=>{
    comparisonResultsPage = new ComparisonResultsPage();
    commonPageElements = new CommonPageElements();  
    signFunnelPage = new SignFunnelPage();
});

When("user sees all banking comparisons", async () => {
    await comparisonResultsPage.selectAllBanksComparison();
});

When("user selected first seven minute angebot", async () => {
    await comparisonResultsPage.selectSevenMinuteAngebot();
});

Then("user navigated to the Url starts with {string} and end with {string}", async (startUrl: string, endUrl: string) => {
    await signFunnelPage.waitForNettoKreditBetrag();
    const currentUrl = await commonPageElements.fetchCurrentUrl();
    expect(currentUrl.startsWith(startUrl)).toEqual(true);
    expect(currentUrl.endsWith(endUrl)).toEqual(true);
});

Then("user sees Nettokreditbetrag as {string}", async (nettoKreditBetrag:string) => {
    await signFunnelPage.waitForNettoKreditBetrag();
    const nettoBetragText = await signFunnelPage.fetchNettoKreditBetrag();
    const numberFormat = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(parseFloat(nettoKreditBetrag));
    expect(nettoBetragText).toEqual(numberFormat);
});
Then("user sees Laufzeit as {int}", async (laufzeit:number) => {
    const laufzeitText = await signFunnelPage.fectchLaufzeit();
    const laufZeitValue = (laufzeit*12).toString() + " Monate";
    expect(laufzeitText).toEqual(laufZeitValue);
});
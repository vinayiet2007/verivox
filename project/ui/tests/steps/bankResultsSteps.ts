import { Before, Then, When } from "@cucumber/cucumber";
import { KreditModulePage } from "../../pages/kreditModulePage";
import {expect} from '@playwright/test';
import { ComparisonResultsPage } from "../../pages/comparisonResultsPage";
import { CommonPageElements } from "../../pages/commonPage";

let kreditModule : KreditModulePage;
let comparisonResultsPage : ComparisonResultsPage;
let commonPageElements : CommonPageElements;

Before(()=>{
    kreditModule = new KreditModulePage();
    comparisonResultsPage = new ComparisonResultsPage();
    commonPageElements = new CommonPageElements();
});

When("user entered the loan amount {string}", async (loanAmount: string) => {
    await kreditModule.enterCredit(loanAmount);
    console.log("User entered the loan amount");
});

When("user entered the loan duration {int} years", async (laufzeit: number) => {
    laufzeit = laufzeit*12;
    await kreditModule.selectLaufzeit(laufzeit.toString());
});

When("user compared the results by clicking Jetzt vergleichen", async () => {
    await kreditModule.compareResults();
});

Then("user sees atleast {int} bank products", async (products: string) => {
    await commonPageElements.scrollToBottom();
    let listOfProducts = await comparisonResultsPage.countOfListOfProducts();
    expect(listOfProducts).toBeGreaterThanOrEqual(parseInt(products));
});

Then("user sees atleast {int} bank product with Sofortauszahlung feature", async (listOfSofortMethods: string) => {
    await commonPageElements.scrollToBottom();
    let listOfProductsWithSofort = await comparisonResultsPage.countOfListOfProductsWithSofort();
    console.log("List of products with sofort: "+listOfProductsWithSofort);
    expect(listOfProductsWithSofort).toBeGreaterThanOrEqual(parseInt(listOfSofortMethods));
});

Then("user sees same results on mobile and desktop", async () => {
    let listOfProductsInDesktopView = await comparisonResultsPage.countOfListOfProducts();
    await commonPageElements.changeToMoBileView();
    let listOfProductsInMobileView = await comparisonResultsPage.countOfListOfProducts();
    expect(listOfProductsInDesktopView).toEqual(listOfProductsInMobileView);
});

import { BaseElements } from "../common/webActions/baseElements";
import { BasePage } from "../common/webActions/basePage";
import { BrowserActions } from "../common/webActions/browserActions";
import { ElementManager } from "../resources/elementManager";

export class ComparisonResultsPage{
    public elementManager:ElementManager;
    public baseActions: BrowserActions;
    public baseElements:BaseElements;  

    constructor(){
        this.elementManager = new ElementManager();
        this.baseActions = new BrowserActions();
        this.baseElements = new BaseElements();
    }

    public async countOfListOfProducts(): Promise<number> {
        const listOfProductsElement = await this.elementManager.getComparisonResultsElelements("listOfProducts");
        const listOfProductsCount = await this.baseActions.getCount(listOfProductsElement);
        return listOfProductsCount;
    }

    public async countOfListOfProductsWithSofort(): Promise<number> {
        const productsWithSofortElement = await this.elementManager.getComparisonResultsElelements("productsWithSofort");
        const productsWithSofortCount = await this.baseActions.getCount(productsWithSofortElement);
        return productsWithSofortCount;
    }

    public async selectAllBanksComparison(): Promise<void> {
        const allBankCompareButtonElement = await this.elementManager.getComparisonResultsElelements("allBankCompareButton");
        await this.baseActions.click(allBankCompareButtonElement);
    }

    public async selectSevenMinuteAngebot(): Promise<any> {
        const firstSevenMinAngebotButtonElement = await this.elementManager.getComparisonResultsElelements("firstSevenMinAngebotButton");
        await this.baseActions.click(firstSevenMinAngebotButtonElement);
    }

}
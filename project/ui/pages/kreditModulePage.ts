import { BaseElements } from "../common/webActions/baseElements";
import { BrowserActions } from "../common/webActions/browserActions";
import { ElementManager } from "../resources/elementManager";

export class KreditModulePage {
    public elementManager:ElementManager;
    public baseActions: BrowserActions;
    public baseElements:BaseElements;  

    constructor(){
        this.elementManager = new ElementManager();
        this.baseActions = new BrowserActions();
        this.baseElements = new BaseElements();
    }

    public async enterCredit(creditValue:string): Promise<any> {
        const kreditElement = await this.elementManager.getKreditElement("kreditbetrag");
        await this.baseActions.setText(kreditElement,creditValue);
    }

    public async selectLaufzeit(creditValue:string): Promise<any> {
        const laufZeitElement = await this.elementManager.getKreditElement("laufZeit");
        await this.baseActions.selectValue(laufZeitElement,creditValue);
    }

    public async compareResults(): Promise<any> {
        const compareResultsElement = await this.elementManager.getKreditElement("compareResults");
        await this.baseActions.click(compareResultsElement);
        await this.baseActions.wait(5000);
    }
}
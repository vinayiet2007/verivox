import { BaseElements } from "../common/webActions/baseElements";
import { BrowserActions } from "../common/webActions/browserActions";
import { ElementManager } from "../resources/elementManager";

export class SignFunnelPage{
    public elementManager:ElementManager;
    public baseActions: BrowserActions;
    public baseElements:BaseElements;  

    constructor(){
        this.elementManager = new ElementManager();
        this.baseActions = new BrowserActions();
        this.baseElements = new BaseElements();
    }

    public async fetchNettoKreditBetrag(): Promise<string> {
        const nettobetragElement = await this.elementManager.getSignUpFunnelElements("nettobetrag");
        const nettoBetragText = await this.baseActions.getText(nettobetragElement);
        if (nettoBetragText === null) {
            throw new Error("Netto Betrag Text is null");
        }
        return nettoBetragText;
    }

    public async waitForNettoKreditBetrag(): Promise<void> {
        const nettobetragElement = await this.elementManager.getSignUpFunnelElements("nettobetrag");
        await this.baseActions.waitForElement(nettobetragElement);
    }

    public async fectchLaufzeit(): Promise<string> {
        const laufzeitElement = await this.elementManager.getSignUpFunnelElements("laufzeit");
        const laufzeitText = await this.baseActions.getText(laufzeitElement);
        if (laufzeitText === null) {
            throw new Error("Laufzeit Text is null");
        }
        return laufzeitText;
    }
}
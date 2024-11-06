import { BaseElements } from "../common/webActions/baseElements";
import { BasePage } from "../common/webActions/basePage";
import { BrowserActions } from "../common/webActions/browserActions";
import { ElementManager } from "../resources/elementManager";

export class CommonPageElements{
    public elementManager:ElementManager;
    public baseActions: BrowserActions;
    public baseElements:BaseElements;
    public basePage:BasePage;
  

    constructor(){
        this.elementManager = new ElementManager();
        this.baseActions = new BrowserActions();
        this.basePage = new BasePage;
        this.baseElements = new BaseElements();
    }

    public async openKreditModule(): Promise<any> {
        const kreditModuleElement = await this.elementManager.getCommonElement("kreditModule");
        await this.baseActions.click(kreditModuleElement);
    }

    public async fetchCurrentUrl(): Promise<string> {
        return await this.baseActions.fetchCurrentUrl();
    }

    public async scrollToBottom(): Promise<void> {
        await this.baseActions.scrollToBottom();
    }

    public async changeToMoBileView(): Promise<void> {
        await this.baseActions.changeToMobileView();
    }
}
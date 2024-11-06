import { BasePage } from "./basePage";
import { PageElement} from "./pageElement";
import { Locator,Page  } from "playwright";

export class BaseElements {
    private static page: Page;
    public async fetchElement(pageElement:PageElement): Promise<any> {
        BaseElements.page = await BasePage.getBasePage();
        switch (pageElement.locatorType) {
            case "css":
                return await this.fetchElementByCss(pageElement.locatorValue);
            case "xpath":
                return await this.fetchElementByXpath(pageElement.locatorValue);
            case "id":
                return await this.fetchElementById(pageElement.locatorValue);
            default:
                throw new Error("Locator type not supported");
        }
    }

    public async fetchElementByCss(cssSelector: string): Promise<Locator> {
        return BaseElements.page.locator(cssSelector); 
    }

    public async fetchElementByXpath(xpath: string): Promise<Locator| Locator[]> {
        return BaseElements.page.locator(`xpath=${xpath}`);
    }

    public async fetchElementById(id: string): Promise<Locator> {
        return BaseElements.page.locator(`id=${id}`);
    }

}
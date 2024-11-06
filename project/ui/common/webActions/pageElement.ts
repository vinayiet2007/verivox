import { IPageElement } from "../interfaces/iPageElement";

export class PageElement implements IPageElement {
    public locatorName: string;
    public locatorType: string;
    public locatorValue: string;
    constructor(locatorName: string, locatorType: string, locatorValue: string) {
        this.locatorName = locatorName;
        this.locatorType = locatorType;
        this.locatorValue = locatorValue
    }

}
import { Locator } from '@playwright/test';
import { BaseElements } from '../common/webActions/baseElements';
import { PageElement } from '../common/webActions/pageElement';
import * as commonElements from './../resources/commonElements.json';
import * as kreditElements from './../resources/kreditElements.json';
import * as comparisonResultsElelements from './../resources/comparisonResultsElelements.json';
import * as signUpFunnelElements from './../resources/signUpFunnelElements.json';

export class ElementManager {
    public baseElements:BaseElements;
    constructor(){
        this.baseElements = new BaseElements
    }
    
    public async getCommonElement(elementName: string): Promise<any> {
        return await this.baseElements.fetchElement(this.getPageElement(commonElements, elementName))
    }

    public async getKreditElement(elementName: string): Promise<any> {
        return await this.baseElements.fetchElement(this.getPageElement(kreditElements, elementName));
    }

    public async getComparisonResultsElelements(elementName: string): Promise<any> {
        return await this.baseElements.fetchElement(this.getPageElement(comparisonResultsElelements, elementName));
    }

    public async getSignUpFunnelElements(elementName: string): Promise<any> {
        return await this.baseElements.fetchElement(this.getPageElement(signUpFunnelElements, elementName));
    }

    private getPageElement(pageResource: any, elementName: string): PageElement {
        const pageElement: PageElement = JSON.parse(JSON.stringify(pageResource.elements)).find((x: any) => x.locatorName.toLowerCase().trim() === elementName.toLowerCase().trim())!;
        return pageElement;
    }
}
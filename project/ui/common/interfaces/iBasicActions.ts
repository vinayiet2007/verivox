import { Locator } from "@playwright/test";

export interface IBasicActions {
    click(webElement:Locator): Promise<void>;
    getText(webElement:Locator): Promise<string | null>;
    getAttribute(webElement:Locator,attribute: string): Promise<string | null>;
    setText(webElement:Locator,text: string): Promise<void>;
    isPresent(webElement:Locator): Promise<boolean>;
    inputValue(webElement:Locator): Promise<string>
    selectValue(webElement:Locator,option:string): Promise<void>;
    getCount(webElement:Locator): Promise<number>;
    waitForElement(webElement:Locator,timeout:number,state?:"attached" | "detached" | "visible" | "hidden"): Promise<void>
    scrollToBottom(): Promise<void>;
    wait(delay:number): Promise<void>;
    wait(delay:number): Promise<void>;
    changeToMobileView(): Promise<void>;
    fetchCurrentUrl(): Promise<string>;
}
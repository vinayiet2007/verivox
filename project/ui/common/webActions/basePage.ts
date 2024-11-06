import {BrowserContext, chromium, ChromiumBrowser, firefox, FirefoxBrowser, Page, webkit, WebKitBrowser, Cookie } from "playwright";
export class BasePage {
    private static context: BrowserContext;
    public static page: Page;
    static browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
    public static async init(browserName:string, browserOptions:any, browserContextOptions:any,cookies?:any): Promise<BasePage> {
        switch(browserName) {
            case "chromium":
                BasePage.browser = await chromium.launch(browserOptions);
                break;
            case "firefox":
                BasePage.browser =  await firefox.launch(browserOptions);
                break;
            case "webkit":
                BasePage.browser =  await webkit.launch(browserOptions);
                break;
            default:
                BasePage.browser = await chromium.launch(browserOptions);
        }
        BasePage.context = await BasePage.browser.newContext();
        await BasePage.context.addCookies(cookies);
        BasePage.page = await BasePage.browser.newPage();
        return new BasePage();
    }

    public  static async getBasePage(): Promise<Page> {
        return BasePage.page;
    }

    public  async accept(): Promise<void> {
        const acceptConsentSelector = 'button:has-text("Alles Akzeptieren")';
        await BasePage.page.waitForSelector(acceptConsentSelector, { timeout: 5000 });
        await BasePage.page.click(acceptConsentSelector);
    }

    public async navigateToUrl(url: string): Promise<void> {
        await BasePage.page.goto(url);
        await BasePage.page.waitForLoadState("domcontentloaded");
        await BasePage.page.waitForTimeout(5000);
    }
    
    public async closePage(): Promise<void> {
        await BasePage.page.close();
    }
}
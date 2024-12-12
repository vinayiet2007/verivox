import { IBasicActions } from "../interfaces/iBasicActions";
import { Locator } from "playwright";
import { BasePage } from "./basePage";

export class BrowserActions implements IBasicActions {
/**
 * Retrieves the specified attribute value from the given web element.
 * @param webElement - The Locator for the web element.
 * @param attribute - The name of the attribute to retrieve.
 * @returns A promise that resolves to the attribute value or `null` if it doesn't exist.
 */
    public async getAttribute(webElement: Locator, attribute: string): Promise<string | null> {
        return await webElement.getAttribute(attribute);
    }

/**
 * Sets the specified text in the given input field or editable element.
 * @param webElement - The Locator for the web element.
 * @param text - The text to set in the element.
 * @returns A promise that resolves when the text is set.
 */
    public async setText(webElement: Locator, text: string): Promise<void> {
        await webElement.fill(text);
    }

/**
 * Clicks on the specified web element.
 * @param webElement - The Locator for the web element.
 * @returns A promise that resolves when the click action is completed.
 */
    public async click(webElement: Locator): Promise<void> {
        console.log(`Clicking on element: ${webElement}`);
        console.log("Check")
        await webElement.click();
    }

/**
 * Retrieves the text content of the specified web element.
 * @param webElement - The Locator for the web element.
 * @returns A promise that resolves to the text content of the element or `null` if there is no content.
 */
    public async getText(webElement: Locator): Promise<string | null> {
        console.log(`Getting text from element: ${webElement}`);
        return await webElement.textContent();
    }

/**
 * Checks if the specified web element is visible on the page.
 * @param webElement - The Locator for the web element.
 * @returns A promise that resolves to `true` if the element is visible, otherwise `false`.
 */
    public async isPresent(webElement: Locator): Promise<boolean> {
        console.log(`Checking if element is present: ${webElement}`);
        return await webElement.isVisible();
    }

/**
 * Retrieves the current input value of the specified web element.
 * @param webElement - The Locator for the input element.
 * @returns A promise that resolves to the current value of the input.
 */
    public async inputValue(webElement: Locator): Promise<string> {
        console.log(`Getting input value from element: ${webElement}`);
        return await webElement.inputValue();
    }

/**
 * Selects the specified option in a dropdown or select element.
 * @param webElement - The Locator for the select element.
 * @param option - The option value to select.
 * @returns A promise that resolves when the option is selected.
 */
    public async selectValue(webElement: Locator, option: string): Promise<void> {
        console.log(`Selecting option: ${option} from element: ${webElement}`);
        await webElement.selectOption(option);
    }

/**
 * Counts the number of elements matching the specified web element locator.
 * @param webElement - The Locator for the elements.
 * @returns A promise that resolves to the count of matching elements.
 */
    public async getCount(webElement: Locator): Promise<number> {
        console.log(`Counting elements: ${webElement}`);
        return await webElement.count();
    }

/**
 * Waits for the specified web element to reach a desired state within a given timeout.
 * @param webElement - The Locator for the web element.
 * @param timeout - The maximum wait time in milliseconds (default: 2000).
 * @param state - The state to wait for: "attached", "detached", "visible", or "hidden".
 * @returns A promise that resolves when the element reaches the desired state.
 */
    public async waitForElement(webElement: Locator, timeout: number = 7000, state?: "attached" | "detached" | "visible" | "hidden"): Promise<void> {
        console.log(`Waiting for element: ${webElement} to be ${state}`);
        await webElement.waitFor({ timeout, state });
    }

/**
 * Scrolls the page to the bottom by simulating mouse scroll actions.
 * @returns A promise that resolves when the scroll action is completed.
 */
    public async scrollToBottom(): Promise<void> {
        console.log("Scrolling to the bottom of the page");
        const pageHeight = await BasePage.page.evaluate(() => document.body.scrollHeight); 
        for (let i = 0; i < pageHeight; i += 100) {
            await BasePage.page.mouse.wheel(0, i);
            this.wait(100);
        }
    }

/**
 * Pauses execution for a specified delay in milliseconds.
 * @param delay - The delay duration in milliseconds.
 * @returns A promise that resolves after the specified delay.
 */
    public async wait(delay: number): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, delay));
    }

/**
 * Switches the browser view to a mobile viewport.
 * @returns A promise that resolves when the viewport is set.
 */
    public async changeToMobileView(): Promise<void> {
        console.log("Switching to mobile view");
        await BasePage.page.setViewportSize({ width: 400, height: 714 });
    }

/**
 * Fetches the current URL of the active page.
 * @returns A promise that resolves to the current URL as a string.
 */
    public async fetchCurrentUrl(): Promise<string> {
        console.log("Fetching current URL");
        return BasePage.page.url();
    }
}
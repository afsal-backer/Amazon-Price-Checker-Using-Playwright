import { test, expect } from "@playwright/test";
import nodemailer from 'nodemailer';
import { sendEmailNotification } from "./amazon.helper";

const EXPECTED_PRICE = ''; // Set your expected price here.
const GMAIL_USER = ''; // Set sender email address here.
const GMAIL_PASS = ''; // Consider using an App Password if 2FA is enabled - visit https://shorturl.at/EQS36


test.describe("Find price of given product page", () => {
    test("Open given url and check price", async ({ page }) => {
        
        await page.goto('https://www.amazon.in/Samsung-Monitor-Netflix-Streaming-LS27AM500NWXXL/dp/B08XB1F1RD/'); //replace link with your product link
        let priceElement = page.locator("(//span[@class='a-price-whole'])[1]");
        await expect(priceElement).toBeVisible();
        await console.log('Amazon product page opened.');

        let price = await priceElement.textContent();
        
        if (price) {
            price = price.replace(/[^a-zA-Z0-9]/g, '');
            console.log("Current Price is: " + price);

            if (price !== EXPECTED_PRICE) {
                console.log("Price has changed.");
                await sendEmailNotification(price, GMAIL_USER, GMAIL_PASS);
            }
        } else {
            console.log("Price element not found or contains no text");
        }
    });
});

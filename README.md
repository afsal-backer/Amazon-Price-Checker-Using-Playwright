# Amazon Price Checker App

This repository contains a Node.js project that uses Playwright for web scrapping. The primary functionality is to check the price of a specified product on Amazon every hour and send an email notification if the price changes from a predefined expected price.

## Features

- Automated price checking on Amazon product pages.
- Email notifications for price changes.
- Configurable expected price and email credentials.


## Getting Started


### Prerequisites
- Node.js (version 14.x or higher)
- npm (comes with Node.js)
- An email account for sending notifications (Gmail recommended).


### Installation

- git clone [repository-url]
- cd PriceCheckerProject
- npm install

### Configuration

Set the Expected Price
- Open amazon.spec.ts.
- Set the EXPECTED_PRICE constant to your desired price.

Email Configuration
- Open amazon.spec.ts.
- Set GMAIL_USER and GMAIL_PASS with your email credentials.
- If using Gmail with 2FA, generate and use an App Password.


### Running the Tests

- Run 'npm run test'

The test will navigate to the specified Amazon product page, check the current price, and compare it with the expected price. If there's a difference, an email notification will be sent.


### GitHub Actions Workflow
The playwright.yml file in the repository sets up a GitHub Actions workflow for running these tests. Currently, the workflow is configured to be manually triggered (workflow_dispatch). You can change that to trigger the workflow every 1 hour by uncommenting the on schedule block.
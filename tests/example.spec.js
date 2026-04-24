// @ts-check

import { test,expect } from '@playwright/test';

test ('checking title', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 
  await expect (page).toHaveTitle(/Playwright/);
});

test('check get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link',{ name: 'Get started'}).click();
  await expect(page.getByRole('heading',{ name: 'Installation'})).toBeVisible();
});    

test('has google title', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('herokup title check', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await expect(page).toHaveTitle(/The Internet/);
});

test('login check', async ({ page }) => {
   await page.goto('https://the-internet.herokuapp.com/login');
   await page.getByLabel('Username').fill('tomsmith');
   await page.getByLabel('Password').fill('SuperSecretPassword!');
   await page.getByRole('button',{name: 'Login'}).click();
   await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});

test('login failed neg testing', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('Wrongpassword');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
});

test('codegen login test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
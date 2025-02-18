import { test, expect } from "@playwright/test";

test("Login test", async ({ page }) => {
  test.setTimeout(20000);
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.locator('[placeholder="Username"]').fill("Admin");
  await page.locator('[placeholder="Password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Ensure successful login by checking for user dropdown
  await page
    .locator("//img[@class='oxd-userdropdown-img']")
    .waitFor({ state: "visible" });

  await page.locator("//img[@class='oxd-userdropdown-img']").click();

  await page
    .locator("//a[normalize-space()='Logout']")
    .waitFor({ state: "visible", timeout: 10000 });

  await page.locator("//a[normalize-space()='Logout']").click();

  await page.close();
});

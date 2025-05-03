import { test, expect } from '@playwright/test';

test("renders the page heading in home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", {name: 'Hello Nextjs'})).toBeVisible();
});

test("renders pokemon on home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", {name: 'Pokemon'})).toBeVisible();
  await expect(page.getByText("List of Pokemon")).toBeVisible();
  // Verify that the text "bulbasaur" is visible
  await expect(page.getByText("bulbasaur")).toBeVisible();
});

test("renders counter on home page", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", {name: 'Counter'})).toBeVisible();
	await expect(page.getByTestId("count")).toHaveText("Count: 0");
	await expect(page.getByRole("button", { name: "Increment" })).toBeVisible();
	await expect(page.getByRole("button", { name: "Decrement" })).toBeVisible();
});

test("interacts with counter on home page", async ({ page }) => {
  await page.goto("/");

	const incrememtButton = await page.getByRole("button", { name: "Increment" });
	const decrementButton = await page.getByRole("button", { name: "Decrement" });

	await incrememtButton.click();
	await incrememtButton.click();

	await expect(page.getByTestId("count")).toHaveText("Count: 2");

	await decrementButton.click();
	await decrementButton.click();

	await expect(page.getByTestId("count")).toHaveText("Count: 0");
});
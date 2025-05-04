import { render, screen } from "@testing-library/react";
import HomegePage from "./page";
import { expect, test } from "vitest";

test("should render page", async () => {
	render(await <HomegePage />)
	expect(await screen.getByText("Hello Nextjs")).toBeDefined();
})
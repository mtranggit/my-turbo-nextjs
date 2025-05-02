import { render, screen } from "@testing-library/react";
import HomegePage from "./page";
import { expect, test } from "vitest";

test("page", () => {
	render(<HomegePage />)
	expect(screen.getByText("Hello Nextjs")).toBeDefined();
})
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter", () => {
	render(<Counter />);
	expect(screen.getByText("Counter")).toBeDefined();
	expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
	expect(screen.getByText("Increment")).toBeDefined();
	expect(screen.getByText("Decrement")).toBeDefined();
})
test("increments the counter", async () => {
	render(<Counter />);
	const incrementButton = screen.getByText("Increment");
	const count = screen.getByTestId("count");

	await userEvent.click(incrementButton);
	expect(count).toHaveTextContent("Count: 1");

	await userEvent.click(incrementButton);
	expect(count).toHaveTextContent("Count: 2");
});

test("decrements the counter", async () => {
	render(<Counter />);
	const decrementButton = screen.getByText("Decrement");
	const count = screen.getByTestId("count");

	await userEvent.click(decrementButton);
	expect(count).toHaveTextContent("Count: -1");

	await userEvent.click(decrementButton);
	expect(count).toHaveTextContent("Count: -2");
});
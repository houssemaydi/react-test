import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
	test("renders correctly", () => {
		render(<Counter></Counter>);
		const countElement = screen.getByRole("heading");
		expect(countElement).toBeInTheDocument();
		const incrementButton = screen.getByRole("button", { name: "Increment" });
		expect(incrementButton).toBeInTheDocument();
	});

	test("renders a count of 0", () => {
		render(<Counter></Counter>);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("0");
	});

	test("renders a count of 1 after one click", async () => {
		user.setup();
		render(<Counter></Counter>);
		const incrementButton = screen.getByRole("button", {
			name: "Increment",
		});
		//click on mouse
		await user.click(incrementButton);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("1");
	});

	test("renders a count of 2 after click twice", async () => {
		user.setup();
		render(<Counter></Counter>);
		const incrementButton = screen.getByRole("button", {
			name: "Increment",
		});
		//click on mouse twice
		await user.dblClick(incrementButton);
		const countElement = screen.getByRole("heading");
		expect(countElement).toHaveTextContent("2");
	});

	test("renders a count of 10 after clicking the set button", async () => {
		user.setup();
		render(<Counter></Counter>);
		const amountInput = screen.getByRole("spinbutton");
		await user.type(amountInput, "10");
		expect(amountInput).toHaveValue(10);
		const settButton = screen.getByRole("button", {
			name: "Set",
		});
		await user.click(settButton);
		const countElement = screen.getByRole("heading");

		expect(countElement).toHaveTextContent("10");
	});

	test("element are focused in right order", async () => {
		user.setup();
		render(<Counter></Counter>);
		const amountInput = screen.getByRole("spinbutton");
		const setButton = screen.getByRole("button", { name: "Set" });
		const incrementButton = screen.getByRole("button", { name: "Increment" });
		await user.tab();
		expect(incrementButton).toHaveFocus();
		await user.tab();
		expect(amountInput).toHaveFocus();
		await user.tab();
		expect(setButton).toHaveFocus();
	});
});

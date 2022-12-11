import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
	it(" renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});
	describe("Test", () => {
		it(" renders with name props", () => {
			render(<Greet name='Houssem' />);
			const textElement = screen.getByText("Hello Houssem");
			expect(textElement).toBeInTheDocument();
		});
	});
});

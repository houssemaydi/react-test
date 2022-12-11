import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
	test("render correctly", () => {
		render(<Application></Application>);

		const pageHeadingElement = screen.getByRole("heading", {
			// name: "Job application form",
			level: 1,
		});
		expect(pageHeadingElement).toBeInTheDocument();

		const sectionElement = screen.getByRole("heading", {
			// name: "Section 1",
			level: 2,
		});
		expect(sectionElement).toBeInTheDocument();

		const paraghraphElement = screen.getByText("All fields are mandatory");
		expect(paraghraphElement).toBeInTheDocument();

		const nameElement = screen.getByRole("textbox", { name: "Name" });
		expect(nameElement).toBeInTheDocument();

		const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
		expect(nameElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		const nameElement4 = screen.getByDisplayValue("Houssem");
		expect(nameElement4).toBeInTheDocument();

		const imageElement = screen.getByAltText("a person with a laptop");
		expect(imageElement).toBeInTheDocument();

		const termsElement2 = screen.getByLabelText(
			"I agree to the terms and conditions"
		);
		expect(termsElement2).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", { name: "Bio" });
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox");
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole("checkbox");
		expect(termsElement).toBeInTheDocument();

		const submitButtonElement = screen.getByRole("button");
		expect(submitButtonElement).toBeInTheDocument();
	});
});

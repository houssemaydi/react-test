import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
	const skills = ["HTML", "CSS", "JAVASCRIPT"];
	test("renders correctly", () => {
		render(<Skills skills={skills}></Skills>);
		const listElement = screen.getByRole("list");
		expect(listElement).toBeInTheDocument();
	});
	test("renders a list of skills", () => {
		render(<Skills skills={skills}></Skills>);
		const listItemElements = screen.getAllByRole("listitem");
		expect(listItemElements).toHaveLength(skills.length);
	});

	test("renders login button", () => {
		render(<Skills skills={skills}></Skills>);
		const loginButton = screen.getByRole("button", { name: "Login" });
		expect(loginButton).toBeInTheDocument();
	});

	test("start learning button is not rendred", () => {
		render(<Skills skills={skills}></Skills>);
		const startLearningButton = screen.queryByRole("button", {
			name: "Start learning",
		});
		expect(startLearningButton).not.toBeInTheDocument();
	});

	test("start learning button is eventually displayed", async () => {
		render(<Skills skills={skills}></Skills>);
		const startLearningButton = await screen.findByRole(
			"button",
			{
				name: "Start learning",
			},
			{ timeout: 2000 }
		);
		expect(startLearningButton).toBeInTheDocument();
	});
});

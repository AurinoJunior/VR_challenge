import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Title } from ".";

describe("title", () => {
  it("should render title", () => {
    render(<Title title="Title" description="Description" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render title with dark variation", () => {
    render(<Title title="Title" darkVariation />);

    expect(screen.getByText("Title")).toHaveClass("dark");
  });
});

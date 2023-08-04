import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListItem } from ".";

describe("ListItem", () => {
  it("should render ListItem", () => {
    render(<ListItem title="Title" text="Text" />);

    expect(screen.getByText("Text")).toBeInTheDocument();
  });
});

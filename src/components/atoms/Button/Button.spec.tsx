import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("button", () => {
  it("should render button", () => {
    render(<Button>Ok</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

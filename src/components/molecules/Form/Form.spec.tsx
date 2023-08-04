import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Form } from ".";
import { vi } from "vitest";

vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

describe("form", () => {
  it("should render form", () => {
    render(<Form onSubmit={vi.fn()} />);

    const formSubmitButton = screen.getByRole("button", {
      name: /entrar/i,
    });
    expect(formSubmitButton).toBeInTheDocument();
  });
});

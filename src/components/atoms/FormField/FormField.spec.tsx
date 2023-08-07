import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FormField } from ".";

describe("FormField", () => {
  it("should render field", () => {
    render(<FormField label="test" name="test" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should update input value", () => {
    render(<FormField label="test" name="test" />);

    const input = screen.getByRole("textbox", {
      name: /test/i,
    });
    const inputElement = document.querySelector("input");

    fireEvent.change(input, { target: { value: "New value" } });

    expect(inputElement?.value).toBe("New value");
  });

  it("should render secret field", () => {
    render(<FormField label="test" name="test" isSecretField />);

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });

    expect(checkbox).toBeInTheDocument();
  });

  it("should show password when click checkbox", () => {
    render(<FormField label="test" name="test" isSecretField />);

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });
    fireEvent.click(checkbox);

    const input = screen.getByLabelText(/test/i);

    expect(input).toHaveAttribute("type", "text");
  });

  it("should hide password when click checkbox", () => {
    render(<FormField label="test" name="test" isSecretField />);

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    const input = screen.getByLabelText(/test/i);

    expect(input).toHaveAttribute("type", "password");
  });
});

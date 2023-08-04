import "@testing-library/jest-dom";
import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Field } from ".";

const mockValue = "test";
const setMockValue = vi.fn();

describe("Field", () => {
  it("should render field", () => {
    render(
      <Field
        label="test"
        name="test"
        valueField={mockValue}
        getValueField={setMockValue}
      />
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should call setMockValue with new value", () => {
    render(
      <Field
        label="test"
        name="test"
        valueField={mockValue}
        getValueField={setMockValue}
      />
    );

    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Testando" } });

    expect(setMockValue).toHaveBeenCalledTimes(1);
  });

  it("should render secret field", () => {
    render(
      <Field
        label="test"
        name="test"
        valueField={mockValue}
        getValueField={setMockValue}
        isSecretField
      />
    );

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });

    expect(checkbox).toBeInTheDocument();
  });

  it("should show password when click checkbox", () => {
    render(
      <Field
        label="test"
        name="test"
        valueField={mockValue}
        getValueField={setMockValue}
        isSecretField
      />
    );

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });
    fireEvent.click(checkbox);

    const input = screen.getByLabelText(/test/i);

    expect(input).toHaveAttribute("type", "text");
  });

  it("should hide password when click checkbox", () => {
    render(
      <Field
        label="test"
        name="test"
        valueField={mockValue}
        getValueField={setMockValue}
        isSecretField
      />
    );

    const checkbox = screen.getByRole("checkbox", { name: /mostrar senha/i });
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);
    const input = screen.getByLabelText(/test/i);

    expect(input).toHaveAttribute("type", "password");
  });
});

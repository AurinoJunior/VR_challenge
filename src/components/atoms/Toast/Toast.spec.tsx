import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Toast, notify } from ".";

describe("Toast", () => {
  it("should render Toast", async () => {
    render(
      <>
        <div>
          <button onClick={() => notify("Error")}>show toast</button>
        </div>
        <Toast />
      </>
    );

    const button = screen.getByText("show toast");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });
});

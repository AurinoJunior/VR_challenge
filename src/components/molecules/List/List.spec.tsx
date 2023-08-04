import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userMock } from "../../../mocks/userMockData";
import { List } from ".";

describe("List", () => {
  it("should render list", () => {
    render(<List title="Test" data={userMock.company} />);

    const titleList = screen.getByRole("heading", {
      name: /test/i,
    });
    const contentList = document.querySelector(".list-item");

    expect(titleList).toBeInTheDocument();
    expect(contentList).toBeInTheDocument();
  });

  it("should render list", () => {
    render(
      <List
        title="Test"
        data={{
          x: null,
        }}
      />
    );

    const contentList = document.querySelector(".list-item");

    expect(contentList).not.toBeInTheDocument();
  });
});

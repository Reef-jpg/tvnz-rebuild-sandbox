import "@testing-library/jest-dom";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Button from "../button";
import renderer from "react-test-renderer";
import { useState } from "react";

describe("Button Tests", () => {
  beforeEach(() => {
    const TestButton = () => {
      const [state, setState] = useState(0);
      return (
        <Button
          text={`test: ${state}`}
          icon="/icon-mylist.svg"
          variant="secondary circle"
          className="test"
          onClick={() => setState(state + 1)}
          isSelected={true}
        />
      );
    };

    render(<TestButton />);
  });

  test("test defaults", () => {
    const { container } = render(<Button />);

    expect(container.querySelector(".text")).toBeFalsy();
    expect(container.querySelector(".icon")).toBeFalsy();
    expect(container.querySelector(".primary")).toBeTruthy();
  });

  test("should have text", () => {
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  test("should have classNames", () => {
    expect(screen.getByRole("button")).toHaveClass("test");
    expect(screen.getByRole("button")).toHaveClass("secondary");
    expect(screen.getByRole("button")).toHaveClass("circle");
    expect(screen.getByRole("button")).toHaveClass("selected");
  });

  test("should be no undefined classNames", () => {
    cleanup();
    render(<Button text="undefined test" />);

    expect(screen.getByRole("button")).not.toHaveClass("undefined");
  });

  test("onclick handler should work", () => {
    expect(screen.getByText("test: 0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("test: 0"));
    expect(screen.getByText("test: 1")).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const tree = renderer
      .create(
        <Button
          text="Test"
          icon="/test.svg"
          variant="secondary"
          className="test"
          isSelected={true}
          onClick={() => console.log("test clicked")}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

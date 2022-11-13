import "@testing-library/jest-dom";

import renderer, { act } from "react-test-renderer";

import { Button } from "../button";
import { render } from "@testing-library/react";

describe("Button Component", () => {
  test("test defaults", () => {
    const { container } = render(<Button />);

    expect(container.querySelector(".text")).toBeFalsy();
    expect(container.querySelector(".icon")).toBeFalsy();
    expect(container.querySelector(".primary")).toBeTruthy();
  });

  test("should have text", () => {
    const { getByText } = render(<Button text="test" />);

    expect(getByText("test")).toBeInTheDocument();
  });

  test("should have image and alt text", () => {
    const { getByAltText } = render(
      <Button icon="/test.svg" iconAlt="Test Button Alt" />
    );

    expect(getByAltText("Test Button Alt")).toBeInTheDocument();
    expect(getByAltText("Test Button Alt")).toHaveAttribute("src", "/test.svg");
  });

  test("should have classNames", () => {
    const { getByRole } = render(
      <Button variant="secondary circle" className="test" isSelected={true} />
    );

    expect(getByRole("button")).toHaveClass("test");
    expect(getByRole("button")).toHaveClass("secondary");
    expect(getByRole("button")).toHaveClass("circle");
    expect(getByRole("button")).toHaveClass("selected");
  });

  test("should be no undefined classNames", () => {
    const { getByText, container } = render(
      <Button text="undefined test" icon="/undefined.svg" />
    );

    expect(getByText("undefined test").closest("button")).not.toHaveClass(
      "undefined"
    );
    expect(container.querySelector(".text")).not.toHaveClass("undefined");
    expect(container.querySelector(".icon")).not.toHaveClass("undefined");
  });

  test("onclick handler should work", () => {
    const mock = jest.fn();
    const { getByRole } = render(<Button onClick={mock} />);

    act(() => {
      getByRole("button").click();
      getByRole("button").click();
      getByRole("button").click();
    });
    expect(mock).toBeCalledTimes(3);
  });

  test("should match snapshots", () => {
    const withProps = renderer
      .create(
        <Button
          text="Test"
          icon="/test.svg"
          iconAlt="test icon alt text"
          variant="secondary"
          className="test"
          isSelected={true}
          onClick={() => console.log("test clicked")}
        />
      )
      .toJSON();

    const withoutProps = renderer.create(<Button />).toJSON();

    expect(withProps).toMatchSnapshot();
    expect(withoutProps).toMatchSnapshot();
  });
});

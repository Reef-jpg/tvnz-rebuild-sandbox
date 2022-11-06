import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Link from "../link";
import renderer from "react-test-renderer";

describe("Button Tests", () => {
  test("should render", () => {
    const { container } = render(<Link href="">Test</Link>);

    expect(container.querySelector(".link")).toBeInTheDocument();
  });

  test("should render children (string)", () => {
    render(<Link href="">Test Link</Link>);

    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  test("should render children (element)", () => {
    render(
      <Link href="">
        <button>Test Element</button>
      </Link>
    );

    expect(screen.getByText("Test Element")).toBeInTheDocument();
  });

  test("should render children (jsx element)", () => {
    const Button = () => {
      return <button>Test Jsx</button>;
    };
    render(
      <Link href="">
        <Button />
      </Link>
    );

    expect(screen.getByText("Test Jsx")).toBeInTheDocument();
  });

  test("should render children (mixed)", () => {
    const Button = () => {
      return <button>Test Mix</button>;
    };
    render(
      <Link href="">
        <Button />
        <button>Test Mix</button>
        Test Mix
      </Link>
    );

    expect(screen.getAllByText("Test Mix").length).toEqual(3);
  });

  test("should have href", () => {
    const { container } = render(<Link href="/test-link">Test Href</Link>);

    expect(container.querySelector(".link")).toHaveAttribute(
      "href",
      "/test-link"
    );
  });

  test("should have target", () => {
    const { container } = render(
      <Link href="" target="_blank">
        Test
      </Link>
    );

    expect(container.querySelector(".link")).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  test("should have classNames", () => {
    const { container } = render(
      <Link href="" className="test">
        Test
      </Link>
    );

    expect(container.querySelector(".link")).toHaveClass("link");
    expect(container.querySelector(".link")).toHaveClass("test");
  });

  test("should not have undefined classNames", () => {
    const { container } = render(<Link href="">Test</Link>);

    expect(container.querySelector(".link")).not.toHaveClass("undefined");
  });

  test("should match snapshot", () => {
    const tree = renderer
      .create(
        <Link href="/test" target="_parent" className="snapshot test">
          Snapshot Test
        </Link>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

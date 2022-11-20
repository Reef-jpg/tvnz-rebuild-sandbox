import "@testing-library/jest-dom";

import { Link } from "../link";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Link Component", () => {
  test("should render", () => {
    const { getByText } = render(<Link href="">Test</Link>);

    expect(getByText("Test")).toBeInTheDocument();
  });

  test("should render children (string)", () => {
    const { getByText } = render(<Link href="">Test Link</Link>);

    expect(getByText("Test Link")).toBeInTheDocument();
  });

  test("should render children (element)", () => {
    const { getByText } = render(
      <Link href="">
        <button>Test Element</button>
      </Link>
    );

    expect(getByText("Test Element")).toBeInTheDocument();
  });

  test("should render children (jsx element)", () => {
    const Button = () => {
      return <button>Test Jsx</button>;
    };
    const { getByText } = render(
      <Link href="">
        <Button />
      </Link>
    );

    expect(getByText("Test Jsx")).toBeInTheDocument();
  });

  test("should render children (mixed)", () => {
    const Button = () => {
      return <button>Test Mix</button>;
    };
    const { getAllByText } = render(
      <Link href="">
        <Button />
        <button>Test Mix</button>
        Test Mix
      </Link>
    );

    expect(getAllByText("Test Mix").length).toEqual(3);
  });

  test("should have href", () => {
    const { getByText } = render(<Link href="/test-link">Test Href</Link>);

    expect(getByText("Test Href")).toHaveAttribute("href", "/test-link");
  });

  test("should have target", () => {
    const { getByText } = render(
      <Link href="" target="_blank">
        Test
      </Link>
    );

    expect(getByText("Test")).toHaveAttribute("target", "_blank");
  });

  test("should have rel", () => {
    const { getByText } = render(
      <Link href="" rel="noopener">
        Test
      </Link>
    );

    expect(getByText("Test")).toHaveAttribute("rel", "noopener");
  });

  test("should have classNames", () => {
    const { getByText } = render(
      <Link href="" className="test">
        Test
      </Link>
    );

    expect(getByText("Test")).toHaveClass("link");
    expect(getByText("Test")).toHaveClass("test");
  });

  test("should not have undefined classNames", () => {
    const { getByText } = render(<Link href="">Test</Link>);

    expect(getByText("Test")).not.toHaveClass("undefined");
  });

  test("should match snapshots", () => {
    const withProps = renderer
      .create(
        <Link
          href="/test"
          target="_parent"
          rel="noopener"
          className="snapshot test"
        >
          Snapshot Test
        </Link>
      )
      .toJSON();

    const withoutProps = renderer
      .create(<Link href="/test2">Snapshot Test 2</Link>)
      .toJSON();

    // snapshot of mixed type children
    const Button = () => {
      return <button>Test Mix</button>;
    };
    const mixed = renderer
      .create(
        <Link href="/mixed-test">
          <Button />
          <button>Test Mix</button>
          Test Mix
        </Link>
      )
      .toJSON();

    expect(withProps).toMatchSnapshot();
    expect(withoutProps).toMatchSnapshot();
    expect(mixed).toMatchSnapshot();
  });
});

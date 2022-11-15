import "@testing-library/jest-dom";

import renderer, { act } from "react-test-renderer";

import { Hero } from "../hero";
import { render } from "@testing-library/react";

describe("Hero Component", () => {
  test("should render", () => {
    const { container } = render(<Hero title="" description="" image="" />);

    expect(container.querySelector(".hero")).toBeTruthy();
    expect(container.querySelector(".hero")).toBeVisible();
  });

  test("should have title and sub title", () => {
    const { getByText } = render(
      <Hero
        title="Test Hero Title"
        subTitle="Sub Test"
        description=""
        image=""
      />
    );

    expect(getByText("Test Hero Title")).toBeInTheDocument();
    expect(getByText("Test Hero Title")).toBeVisible();
    expect(getByText("Sub Test")).toBeInTheDocument();
    expect(getByText("Sub Test")).toBeVisible();
  });

  test("should have description", () => {
    const { getByText } = render(
      <Hero title="" description="hero desc" image="" />
    );

    expect(getByText("hero desc")).toBeInTheDocument();
    expect(getByText("hero desc")).toBeVisible();
  });

  test("should have image", () => {
    const { getByAltText } = render(
      <Hero
        title=""
        description=""
        image="/test.jpg"
        imageAlternativeText="test hero alt text"
      />
    );

    expect(getByAltText("test hero alt text")).toBeInTheDocument();
    expect(getByAltText("test hero alt text")).toBeVisible();
  });

  test("click handler for my list should work", () => {
    const { getByText } = render(
      <Hero title="Test Hero State" description="" image="" />
    );

    expect(getByText("My List").closest("button")).toHaveClass(
      "not-in-my-list"
    );

    act(() => {
      getByText("My List").click();
    });

    expect(getByText("My List").closest("button")).toHaveClass("in-my-list");
  });

  test("should match snapshots", () => {
    const withProps = renderer
      .create(
        <Hero
          title="Hero Test"
          description="Description"
          image="/test-bg.jpg"
          imageAlternativeText="Pic of a test"
          subTitle="TEST"
        />
      )
      .toJSON();

    expect(withProps).toMatchSnapshot();
  });
});

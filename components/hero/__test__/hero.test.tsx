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

  test("should have title", () => {
    const { getByText } = render(
      <Hero title="Test Hero Title" description="" image="" />
    );

    expect(getByText("Test Hero Title")).toBeInTheDocument();
    expect(getByText("Test Hero Title")).toBeVisible();
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
        imageAlt="test hero alt text"
      />
    );

    expect(getByAltText("test hero alt text")).toBeInTheDocument();
    expect(getByAltText("test hero alt text")).toBeVisible();
  });
});

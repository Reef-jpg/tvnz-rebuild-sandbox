import renderer, { act } from 'react-test-renderer';
import { Hero } from '../hero';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("Hero Component", () => {
  test("should render", () => {
    const { container } = render(
      <Hero title="" description="" image="" heroLink="" buttonLink="" />
    );

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
        heroLink=""
        buttonLink=""
      />
    );

    expect(getByText("Test Hero Title")).toBeInTheDocument();
    expect(getByText("Test Hero Title")).toBeVisible();
    expect(getByText("Sub Test")).toBeInTheDocument();
    expect(getByText("Sub Test")).toBeVisible();
  });

  test("should have description", () => {
    const { getByText } = render(
      <Hero
        title=""
        description="hero desc"
        image=""
        heroLink=""
        buttonLink=""
      />
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
        heroLink=""
        buttonLink=""
      />
    );

    expect(getByAltText("test hero alt text")).toBeInTheDocument();
    expect(getByAltText("test hero alt text")).toBeVisible();
  });

  test("should render buttons", () => {
    const { getByText } = render(
      <Hero
        title=""
        description=""
        image=""
        heroLink="/hero"
        buttonLink="/button"
      />
    );

    expect(getByText("watch now")).toBeVisible();
    expect(getByText("watch now").closest("a")).toHaveAttribute(
      "href",
      "/button"
    );
    expect(getByText("my list")).toBeVisible();
  });

  describe("Sponsor Logo", () => {
    test("should render sponsor logo", () => {
      const { getByText, getByAltText } = render(
        <Hero
          title=""
          description=""
          image=""
          heroLink="/hero"
          buttonLink="/button"
          sponsorLogo={{
            link: "/sponsor",
            image: "/test.png",
            label: "Test Sponsor",
          }}
        />
      );

      expect(getByText("Test Sponsor")).toBeInTheDocument();
      expect(getByText("Test Sponsor")).toBeVisible();
      expect(getByText("Test Sponsor").closest("a")).toHaveAttribute(
        "href",
        "/sponsor"
      );
      expect(getByAltText("Sponsor Logo")).toBeInTheDocument();
      expect(getByAltText("Sponsor Logo")).toBeVisible();
    });

    test("should render fallback text", () => {
      const { getByText } = render(
        <Hero
          title=""
          description=""
          image=""
          heroLink="/hero"
          buttonLink="/button"
          sponsorLogo={{
            link: "/sponsor",
            image: "/test.png",
          }}
        />
      );

      expect(getByText("Proud Sponsor")).toBeInTheDocument();
      expect(getByText("Proud Sponsor")).toBeVisible();
    });
  });

  describe("Click Handlers", () => {
    test("click handler for my list should work", () => {
      const { getByText } = render(
        <Hero
          title="Test Hero State"
          description=""
          image=""
          heroLink=""
          buttonLink=""
        />
      );

      expect(getByText("my list").closest("button")).toHaveClass(
        "not-in-my-list"
      );

      act(() => {
        getByText("my list").click();
      });

      expect(getByText("my list").closest("button")).toHaveClass("in-my-list");
    });

    test("click handler for hero should work", () => {
      // setup
      const { location } = window;
      // @ts-ignore
      delete window.location;
      window.location = { ...location, assign: jest.fn() };

      const { getByText, container } = render(
        <Hero
          title="Title"
          subTitle="Sub Title"
          description="Desc"
          image=""
          heroLink="/hero"
          buttonLink="/button"
          sponsorLogo={{
            link: "/sponsor",
            image: "/test.png",
            label: "Test Sponsor",
          }}
        />
      );

      act(() => {
        // things that should trigger event
        getByText("Title").click();
        getByText("Desc").click();
        getByText("Sub Title").click();
        (container.querySelector(".content") as HTMLElement)?.click();

        // things that should not trigger the event
        getByText("watch now").click();
        getByText("my list").click();
        getByText("Test Sponsor").click();
      });

      expect(window.location.assign).toHaveBeenCalledTimes(4);
      expect(window.location.assign).toHaveBeenCalledWith("/hero");

      // cleanup
      window.location = location;
    });
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
          heroLink="/hero"
          buttonLink="/button"
        />
      )
      .toJSON();

    expect(withProps).toMatchSnapshot();
  });
});

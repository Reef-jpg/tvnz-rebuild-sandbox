export const breakpoints = {
  mobile: "@media only screen and (max-width: 752px)",
  tablet: "@media only screen and (min-width: 753px)",
  tabletOnly:
    "@media only screen and (min-width: 753px) and (max-width: 1023px)",
  laptopOnly:
    "@media only screen and (min-width: 1024px) and (max-width: 1599px)",
  laptop: "@media only screen and (min-width: 1024px)",
  desktop: "@media only screen and (min-width: 1280px)",
  // widescreen & maxscreen are not good identifiers as there's already 4k screens widely available.
  // For now we'll keep it to maintain consistency with media-queries.scss.
  widescreen: "@media only screen and (min-width: 1600px)",
  maxscreen: "@media only screen and (min-width: 1800px)",
};

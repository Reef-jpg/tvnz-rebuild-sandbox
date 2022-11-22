export const breakpoints = {
  mobile: "(max-width: 752px)",

  tablet: "(min-width: 753px)",
  tabletOnly: "(min-width: 753px) and (max-width: 1023px)",

  laptop: "(min-width: 1024px)",
  laptopOnly: "(min-width: 1024px) and (max-width: 1599px)",

  desktop: "(min-width: 1280px)",
  widescreen: "(min-width: 1600px)",
  maxscreen: "(min-width: 1800px)",
};

export const media = {
  mobile: `@media only screen and ${breakpoints.mobile}`,

  tablet: `@media only screen and ${breakpoints.tablet}`,
  tabletOnly: `@media only screen and ${breakpoints.tabletOnly}`,

  laptop: `@media only screen and ${breakpoints.laptop}`,
  laptopOnly: `@media only screen and ${breakpoints.laptopOnly}`,

  desktop: `@media only screen and ${breakpoints.desktop}`,
  widescreen: `@media only screen and ${breakpoints.widescreen}`,
  maxscreen: `@media only screen and ${breakpoints.maxscreen}`,
};

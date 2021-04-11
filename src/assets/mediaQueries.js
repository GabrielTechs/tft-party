export const breakpoints = {
  sm: 469,
  md: 769,
  lg: 1069,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

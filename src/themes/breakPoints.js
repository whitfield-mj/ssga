import { css } from "styled-components";
export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px"
};

export default Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

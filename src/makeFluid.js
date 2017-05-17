import { css } from "glamor";

export function makeFluid() {
  return css({
    display: "block",
    maxWidth: "100%"
  });
}

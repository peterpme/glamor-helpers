import { css } from "glamor";

export default function makeFluid() {
  return css({
    display: "block",
    maxWidth: "100%"
  });
}

import { css } from "glamor";
export function setBackgroundUrl(url, fallbackColor) {
  return css({
    backgroundColor: fallbackColor,
    backgroundImage: `url(${url})`
  });
}

import { css } from "glamor";
export default function setBackgroundUrl(url, fallbackColor) {
  return css({
    backgroundColor: fallbackColor,
    backgroundImage: `url(${url})`
  });
}

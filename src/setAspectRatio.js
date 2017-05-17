import { css } from "glamor";
export function setAspectRatio(width, height) {
  const paddingTop = height / width * 100;
  return css({
    position: "relative",
    ":before": {
      display: "block",
      content: '""',
      width: "100%",
      paddingTop: `${paddingTop}%`
    },
    "& .content": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  });
}

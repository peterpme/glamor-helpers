import { css } from 'glamor';

export default function em (pixels, context = 16) {
  const emSize = pixels / context;
  return css({
    fontSize: `${emSize}em`,
  })
}

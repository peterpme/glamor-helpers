import { css } from 'glamor';

export default function visuallyHideElement () {
    return css({
      margin: -1,
      padding: 0,
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      clip: 'rect(0, 0, 0, 0)',
      position: 'absolute',
    })
}

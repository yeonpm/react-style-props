import { toPixel } from "../toPixel";
import { ConfigKeyType, numStr } from "./types/common";

const size = {
  width: (width: numStr) => `width:${toPixel(width)};`,
  w: (width: numStr) => `width:${toPixel(width)};`,
  height: (height: numStr) => `height:${toPixel(height)};`,
  h: (height: numStr) => `height:${toPixel(height)};`,
  size: (size: numStr | [numStr, numStr]) =>
    `width: ${
      Array.isArray(size) ? toPixel(size[0]) : toPixel(size)
    }; height: ${Array.isArray(size) ? toPixel(size[1]) : toPixel(size)};`,
  fullP: () => "width:100%; height:100%;",
  fullV: () => "width:100vw; height:100vh;",
  maxWidth: (maxWidth: numStr) => `max-width:${toPixel(maxWidth)};`,
  maxHeight: (maxHeight: numStr) => `max-height:${toPixel(maxHeight)};`,
  minWidth: (minWidth: numStr) => `min-width:${toPixel(minWidth)};`,
  minHeight: (minWidth: numStr) => `min-height:${toPixel(minWidth)};`,
} as ConfigKeyType;

export default size;

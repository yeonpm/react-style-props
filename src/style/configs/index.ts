import { ConfigKeyType, numStr } from "./types/common";
import borderConfig from "./border";
import colorConfig from "./color";
import marginConfig from "./margin";
import paddingConfig from "./padding";
import sizeConfig from "./size";
import textConfig from "./text";
import { toPixel } from "../toPixel";
import x from "../x";
import cssConfig from "./css";

const defaultConfig = {
  ...cssConfig,

  ...borderConfig,
  ...colorConfig,
  ...marginConfig,
  ...paddingConfig,
  ...sizeConfig,
  ...textConfig,

  jc: (jc?: boolean) => (jc ? "display:flex; justify-content:center;" : ""),
  ac: (ac?: boolean) => (ac ? "display:flex; align-items:center;" : ""),
  flex: (flex?: boolean) => (flex ? "display:flex;" : ""),
  mr0mlAuto: (mr0mlAuto?: boolean) =>
    mr0mlAuto ? "margin-right:0; margin-left:auto;" : "",
  ml0mrAuto: (ml0mrAuto?: boolean) =>
    ml0mrAuto ? "margin-left:0; margin-right:auto;" : "",
  mt0mbAuto: (mt0mbAuto?: boolean) =>
    mt0mbAuto ? "margin-top:0; margin-bottom:auto;" : "",
  mb0mtAuto: (mb0mtAuto?: boolean) =>
    mb0mtAuto ? "margin-bottom:0; margin-top:auto;" : "",
  flex1: (flex1?: boolean) => (flex1 ? "flex:1;" : ""),
  flexNum: (flexNum: string) => `flex:${flexNum};`,
  overflow: (overflow: string) => `overflow:${overflow};`,
  overflowX: (overflowX: string) => `overflow-x:${overflowX};`,
  overflowY: (overflowY: string) => `overflow-y:${overflowY};`,
  none: (none?: boolean) => (none ? "display:none;" : ""),
  gap: (gap: numStr) => `display:flex; gap:${toPixel(gap)};`,
  flexDirection: (flexDirection: string) => `flex-direction:${flexDirection};`,
  column: (column?: boolean) =>
    column ? "display:flex; flex-direction:column;" : "",
  col: (col?: boolean) => (col ? "display:flex; flex-direction:column;" : ""),
  row: (row?: boolean) => (row ? "display:flex; flex-direction:row;" : ""),
  alignItems: (alignItems: string) => `align-items:${alignItems};`,
  justifyContent: (justifyContent: string) =>
    `justify-content:${justifyContent};`,
  position: (position: string) => `position:${position};`,
  ellipsis: (ellipsis?: boolean) =>
    ellipsis
      ? "text-overflow:ellipsis; overflow:hidden; white-space:nowrap;"
      : "",
  pointer: (pointer?: boolean) => (pointer ? "cursor: pointer;" : ""),
  textAlign: (textAlign: string) => `text-align:${textAlign};`,
  textCenter: (textCenter?: boolean) =>
    textCenter ? `text-align:center;` : "",
  textRight: (textRight?: boolean) => (textRight ? `text-align:right;` : ""),
  textLeft: (textLeft?: boolean) => (textLeft ? `text-align:left;` : ""),
  between: (between?: boolean) =>
    between ? "display:flex; justify-content:space-between;" : "",
  fontSize: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  fs: (fontSize: string) => `font-size:${toPixel(fontSize)};`,
  fontWeight: (fontWeight: numStr) => `font-weight:${fontWeight};`,
  fw: (fontWeight: numStr) => `font-weight:${fontWeight};`,
  boxShadow: (boxShadow: string) => `box-shadow:${boxShadow};`,
  letterSpacing: (letterSpacing: numStr) =>
    `letter-spacing:${toPixel(letterSpacing)};`,
  lineHeight: (lineHeight: numStr) => `line-height:${toPixel(lineHeight)};`,
  top: (top: numStr) => `top:${toPixel(top)};`,
  left: (left: numStr) => `left:${toPixel(left)};`,
  right: (right: numStr) => `right:${toPixel(right)};`,
  bottom: (bottom: numStr) => `bottom:${toPixel(bottom)};`,
  opacity: (opacity: numStr) => `opacity:${opacity};`,
  display: (display: string) => `display:${display};`,
  fontFamily: (fontFamily: string) => `font-family:${fontFamily};`,

  flexGrow: (flexGrow: numStr) => `flex-grow:${flexGrow};`,
  transform: (transform: string) => `transform: ${transform};`,
  transition: (transition: string) => `transition: ${transition};`,
  animation: (animation: string) => `animation: ${animation};`,
  backdropFilter: (backdropFilter: string) =>
    `backdrop-filter: ${backdropFilter};`,
  filter: (filter: string) => `filter: ${filter};`,
  gridTemplateColumns: (gridTemplateColumns: string) =>
    `grid-template-columns: ${gridTemplateColumns};`,
  gridTemplateRows: (gridTemplateRows: string) =>
    `grid-template-rows: ${gridTemplateRows};`,
  gridColumn: (gridColumn: string) => `grid-column: ${gridColumn};`,
  gridRow: (gridRow: string) => `grid-row: ${gridRow};`,
  columnGap: (columnGap: numStr) => `column-gap: ${toPixel(columnGap)};`,
  rowGap: (rowGap: numStr) => `row-gap: ${toPixel(rowGap)};`,
  objectFit: (objectFit: string) => `object-fit: ${objectFit};`,
  objectPosition: (objectPosition: string) =>
    `object-position: ${objectPosition};`,
  userSelect: (userSelect: string) => `user-select: ${userSelect};`,
  pointerEvents: (pointerEvents: string) => `pointer-events: ${pointerEvents};`,
  whiteSpace: (whiteSpace: string) => `white-space: ${whiteSpace};`,
  wordBreak: (wordBreak: string) => `word-break: ${wordBreak};`,
  textTransform: (textTransform: string) => `text-transform: ${textTransform};`,
  textDecoration: (textDecoration: string) =>
    `text-decoration: ${textDecoration};`,
  textShadow: (textShadow: string) => `text-shadow: ${textShadow};`,
  verticalAlign: (verticalAlign: string) => `vertical-align: ${verticalAlign};`,
  visibility: (visibility: string) => `visibility: ${visibility};`,
  willChange: (willChange: string) => `will-change: ${willChange};`,
  scrollBehavior: (scrollBehavior: string) =>
    `scroll-behavior: ${scrollBehavior};`,
  scrollSnapType: (scrollSnapType: string) =>
    `scroll-snap-type: ${scrollSnapType};`,
  scrollSnapAlign: (scrollSnapAlign: string) =>
    `scroll-snap-align: ${scrollSnapAlign};`,
  aspectRatio: (aspectRatio: string) => `aspect-ratio: ${aspectRatio};`,
  fontStyle: (fontStyle: string) => `font-style: ${fontStyle};`,

  round3: () => "border-radius:3px;",
  round4: () => "border-radius:4px;",
  round5: () => "border-radius:5px;",
  round8: () => "border-radius:8px;",
  cursor: (value: string) => (value ? `cursor:${value};` : ""),
  zIndex: (value: string) => (value ? `z-index:${value};` : ""),

  absolute: (absolute?: boolean) => (absolute ? "position:absolute;" : ""),
  fixed: (fixed?: boolean) => (fixed ? "position:fixed;" : ""),
  relative: (relative?: boolean) => (relative ? "position:relative;" : ""),
  sticky: (sticky?: boolean) => (sticky ? "position:sticky;" : ""),

  mouseCss: (value: boolean) =>
    value === true
      ? x`
          user-select: none;
          padding: 0px;
          border-radius: 4px;
          cursor: pointer;
          overflow: hidden;
          &:hover {
            filter: brightness(0.98);
          }
          &:active {
            filter: brightness(0.95);
          }
          &:focus {
            outline: none;
          }
          -webkit-tap-highlight-color: transparent;
        `
      : "",
} as ConfigKeyType;

export default defaultConfig;

import { ColorConfigType } from './color.d.js';
import { MarginConfigType } from './margin.d.js';
import { PaddingConfigType } from './padding.d.js';
import { SizeConfigType } from './size.d.js';
import { BorderConfigType } from './border.d.js';
import { numStr } from './common.d.js';
import { TextVariantType } from './text.d.js';

// declare const picsso: PicssoElementTypes;
// export default picsso;
// declare module "react-picsso" {}
interface DefaultConfigType extends MarginConfigType, PaddingConfigType, SizeConfigType, BorderConfigType, ColorConfigType {
  /** justify-content: center; Involves "display: flex;". */
  jc?: boolean;
  /** align-items: center; Involves "display: flex;". */
  ac?: boolean;
  /** margin-right: 0; margin-left: auto; Involves "display: flex;". */
  mr0mlAuto?: boolean;
  /** margin-left: 0; margin-right: auto; Involves "display: flex;". */
  ml0mrAuto?: boolean;
  /** margin-top: 0; margin-bottom: auto; Involves "display: flex;". */
  mt0mbAuto?: boolean;
  /** margin-bottom: 0; margin-top: auto; Involves "display: flex;". */
  mb0mtAuto?: boolean;
  /** display: flex; */
  flex?: boolean;
  /** flex: 1; */
  flex1?: boolean;
  flexNum?: number;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  /** display: none; */
  none?: boolean;
  /** Equals to gap. Involves "display: flex;". */
  gap?: numStr;
  flexDirection?: string;
  /** flex-direction: column; Involves "display: flex;". */
  column?: boolean;
  /** flex-direction: column; Involves "display: flex;". */
  col?: boolean;
  /** flex-direction: row; Involves "display: flex;". */
  row?: boolean;
  alignItems?: string;
  justifyContent?: string;
  position?: string;
  ellipsis?: boolean;
  /** cursor: pointer; */
  pointer?: boolean;
  textAlign?: string;
  textCenter?: boolean;
  textLeft?: boolean;
  textRight?: boolean;
  between?: boolean;
  fontSize?: numStr;
  /** Equals to font-size. */
  fs?: numStr;
  fontWeight?: numStr;
  /** Equals to font-weight. */
  fw?: numStr;
  boxShadow?: string;
  letterSpacing?: numStr;
  top?: numStr;
  left?: numStr;
  right?: numStr;
  bottom?: numStr;
  opacity?: numStr;
  display?: string;
  fontFamily?: string;
  cursor?: string;

  // border radius
  round3?: boolean;
  round4?: boolean;
  round5?: boolean;
  round8?: boolean;
  cursor?: string;
  zIndex?: number;

  // font
  headingXLarge36B?: boolean;
  headingLarge28B?: boolean;
  headingMedium24B?: boolean;
  headingMedium24Sb?: boolean;
  headingSmall20B?: boolean;
  headingSmall20Sb?: boolean;
  subHeadingXLarge18B?: boolean;
  subHeadingXLarge18Sb?: boolean;
  subHeadingLarge16B?: boolean;
  subHeadingLarge16Sb?: boolean;
  subHeadingLarge16M?: boolean;
  subHeadingMedium14B?: boolean;
  subHeadingMedium14Sb?: boolean;
  subHeadingMedium14M?: boolean;
  subHeadingSmall12B?: boolean;
  subHeadingSmall12Sb?: boolean;
  subHeadingSmall12M?: boolean;
  subHeadingXSmall10B?: boolean;
  subHeadingXSmall10Sb?: boolean;
  bodyLarge16Sb?: boolean;
  bodyLarge16R?: boolean;
  bodyMedium14B?: boolean;
  bodyMedium14Sb?: boolean;
  bodyMedium14R?: boolean;
  bodySmall12B?: boolean;
  bodySmall12Sb?: boolean;
  bodySmall12R?: boolean;
  bodyXSmall10B?: boolean;
  bodyXSmall10R?: boolean;

  mouseCss?: boolean;

  font?: TextVariantType;

  transform?: string;
  transition?: string;
  animation?: string;
  backdropFilter?: string;
  filter?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumn?: string;
  gridRow?: string;
  columnGap?: string;
  rowGap?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all';
  pointerEvents?: 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces';
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
  textOverflow?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
  textDecoration?: string;
  textShadow?: string;
  verticalAlign?: string;
  visibility?: 'visible' | 'hidden' | 'collapse';
  willChange?: string;
  scrollBehavior?: 'auto' | 'smooth';
  scrollSnapType?: string;
  scrollSnapAlign?: 'none' | 'start' | 'end' | 'center';
  aspectRatio?: string;
  fontStyle?: string;
}

export { type DefaultConfigType, numStr };

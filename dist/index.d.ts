declare function seperateStyleString(props: any, additionalConfig?: any): {
    styleString: string;
    otherProps: any;
};

declare function x(strings: TemplateStringsArray, ...values: string[]): string;

declare function toPixel(value: string | number): string;

type ColorConfigType = {
  background?: string;
  backgroundColor?: string;
  /** Equals to background. */
  bg?: string;
  color?: string;
  white?: boolean;
  red?: boolean;
};

declare type ConfigKeyType = {
  [key: string]: (e: any) => string;
};

declare type numStr = number | string;

type MarginConfigType = {
  margin?: numStr;
  /** Equals to margin. */
  m?: numStr;
  /** Equals to margin-left and margi-right. */
  marginX?: numStr;
  /** Equals to margin-left and margi-right. */
  mx?: numStr;
  /** Equals to margin-top and margi-bottom. */
  marginY?: numStr;
  /** Equals to margin-top and margi-bottom. */
  my?: numStr;
  marginTop?: numStr;
  /** Equals to margin-top. */
  mt?: numStr;
  marginRight?: numStr;
  /** Equals to margin-right. */
  mr?: numStr;
  marginBottom?: numStr;
  /** Equals to margin-bottom. */
  mb?: numStr;
  marginLeft?: numStr;
  /** Equals to margin-left. */
  ml?: numStr;
};

type PaddingConfigType = {
  padding?: numStr;
  /** Equals to padding. */
  p?: numStr;
  /** Equals to margin-left and margi-right. */
  paddingX?: numStr;
  /** Equals to margin-left and margi-right. */
  px?: numStr;
  /** Equals to margin-top and margi-bottom. */
  paddingY?: numStr;
  /** Equals to margin-top and margi-bottom. */
  py?: numStr;
  paddingTop?: numStr;
  /** Equals to padding-top. */
  pt?: numStr;
  paddingRight?: numStr;
  /** Equals to padding-right. */
  pr?: numStr;
  paddingBottom?: numStr;
  /** Equals to padding-bottom. */
  pb?: numStr;
  paddingLeft?: numStr;
  /** Equals to padding-left. */
  pl?: numStr;
};

type SizeConfigType = {
  width?: numStr;
  /** Equals to width. */
  w?: numStr;
  height?: numStr;
  /** Equals to height. */
  h?: numStr;
  size?: numStr | [numStr, numStr];
  /** Apply 100% to width and height respectively. */
  fullP?: boolean;
  /** Apply 100vw and 100vh to width and height respectively. */
  fullV?: boolean;
  maxWidth?: numStr;
  maxHeight?: numStr;
  minWidth?: numStr;
  minHeight?: numStr;
};

type BorderConfigType = {
  border?: string;
  borderRadius?: numStr;
  borderTop?: string;
  /** Equals to border-top. */
  bt?: string;
  borderRight?: string;
  /** Equals to border-right. */
  br?: string;
  borderBottom?: string;
  /** Equals to border-bottom. */
  bb?: string;
  borderLeft?: string;
  /** Equals to border-left. */
  bl?: string;
};

type TextVariantType =
  | "Heading/XLarge-36B"
  | "Heading/Large-28B"
  | "Heading/Medium-24B"
  | "Heading/Medium-24SB"
  | "Heading/Small-20B"
  | "Heading/Small-20SB"
  | "Subheading/XLarge-18B"
  | "Subheading/XLarge-18SB"
  | "Subheading/Large-16B"
  | "Subheading/Large-16SB"
  | "Subheading/Large-16M"
  | "Subheading/Medium-14B"
  | "Subheading/Medium-14SB"
  | "Subheading/Medium-14M"
  | "Subheading/Small-12B"
  | "Subheading/Small-12SB"
  | "Subheading/Small-12M"
  | "Subheading/XSmall-10B"
  | "Subheading/XSmall-10SB"
  | "Body/Large-16SB"
  | "Body/Large-16R"
  | "Body/Medium-14B"
  | "Body/Medium-14SB"
  | "Body/Medium-14R"
  | "Body/Small-12B"
  | "Body/Small-12SB"
  | "Body/Small-12R"
  | "Body/XSmall-10B"
  | "Body/XSmall-10R";

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

export { type BorderConfigType, type ColorConfigType, type ConfigKeyType, type DefaultConfigType, type MarginConfigType, type PaddingConfigType, type SizeConfigType, type TextVariantType, type numStr, seperateStyleString, toPixel, x };

import css from "../x";
import { TextVariantType } from "./types/text";

const bold = "700",
  semiBold = "600",
  medium = "500",
  regular = "400";

const textVariant = {
  font: (tv?: TextVariantType) => {
    switch (tv) {
      case "Heading/XLarge-36B":
        return text.headingXLarge36B(true);
      case "Heading/Large-28B":
        return text.headingLarge28B(true);
      case "Heading/Medium-24B":
        return text.headingMedium24B(true);
      case "Heading/Medium-24SB":
        return text.headingMedium24Sb(true);
      case "Heading/Small-20B":
        return text.headingSmall20B(true);
      case "Heading/Small-20SB":
        return text.headingSmall20Sb(true);
      case "Subheading/XLarge-18B":
        return text.subHeadingXLarge18B(true);
      case "Subheading/XLarge-18SB":
        return text.subHeadingXLarge18Sb(true);
      case "Subheading/Large-16B":
        return text.subHeadingLarge16B(true);
      case "Subheading/Large-16SB":
        return text.subHeadingLarge16Sb(true);
      case "Subheading/Large-16M":
        return text.subHeadingLarge16M(true);
      case "Subheading/Medium-14B":
        return text.subHeadingMedium14B(true);
      case "Subheading/Medium-14SB":
        return text.subHeadingMedium14Sb(true);
      case "Subheading/Medium-14M":
        return text.subHeadingMedium14M(true);
      case "Subheading/Small-12B":
        return text.subHeadingSmall12B(true);
      case "Subheading/Small-12SB":
        return text.subHeadingSmall12Sb(true);
      case "Subheading/Small-12M":
        return text.subHeadingSmall12M(true);
      case "Subheading/XSmall-10B":
        return text.subHeadingXSmall10B(true);
      case "Subheading/XSmall-10SB":
        return text.subHeadingXSmall10Sb(true);
      case "Body/Large-16SB":
        return text.bodyLarge16Sb(true);
      case "Body/Large-16R":
        return text.bodyLarge16R(true);
      case "Body/Medium-14B":
        return text.bodyMedium14B(true);
      case "Body/Medium-14SB":
        return text.bodyMedium14Sb(true);
      case "Body/Medium-14R":
        return text.bodyMedium14R(true);
      case "Body/Small-12B":
        return text.bodySmall12B(true);
      case "Body/Small-12SB":
        return text.bodySmall12Sb(true);
      case "Body/Small-12R":
        return text.bodySmall12R(true);
      case "Body/XSmall-10B":
        return text.bodyXSmall10B(true);
      case "Body/XSmall-10R":
        return text.bodyXSmall10R(true);
      default:
        return null;
    }
  },
};

const text = {
  // Heading
  headingXLarge36B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 36px;
          line-height: 120%;
        `
      : null,
  headingLarge28B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 28px;
          line-height: 120%;
        `
      : null,
  headingMedium24B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 24px;
          line-height: 120%;
        `
      : null,
  headingMedium24Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 24px;
          line-height: 120%;
        `
      : null,
  headingSmall20B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 20px;
          line-height: 120%;
        `
      : null,
  headingSmall20Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 20px;
          line-height: 120%;
        `
      : null,

  //Subheading
  subHeadingXLarge18B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 18px;
          line-height: 120%;
        `
      : null,
  subHeadingXLarge18Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 18px;
          line-height: 120%;
        `
      : null,
  subHeadingLarge16B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 16px;
          line-height: 120%;
        `
      : null,
  subHeadingLarge16Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 16px;
          line-height: 120%;
        `
      : null,
  subHeadingLarge16M: (f?: boolean) =>
    f
      ? css`
          font-weight: ${medium};
          font-size: 16px;
          line-height: 120%;
        `
      : null,
  subHeadingMedium14B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 14px;
          line-height: 120%;
        `
      : null,
  subHeadingMedium14Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 14px;
          line-height: 120%;
        `
      : null,
  subHeadingMedium14M: (f?: boolean) =>
    f
      ? css`
          font-weight: ${medium};
          font-size: 14px;
          line-height: 120%;
        `
      : null,
  subHeadingSmall12B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 12px;
          line-height: 120%;
        `
      : null,
  subHeadingSmall12Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 12px;
          line-height: 120%;
        `
      : null,
  subHeadingSmall12M: (f?: boolean) =>
    f
      ? css`
          font-weight: ${medium};
          font-size: 12px;
          line-height: 120%;
        `
      : null,
  subHeadingXSmall10B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 10px;
          line-height: 120%;
        `
      : null,
  subHeadingXSmall10Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 10px;
          line-height: 120%;
        `
      : null,

  // Body
  bodyLarge16Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 16px;
          line-height: 140%;
        `
      : null,
  bodyLarge16R: (f?: boolean) =>
    f
      ? css`
          font-weight: ${regular};
          font-size: 16px;
          line-height: 140%;
        `
      : null,
  bodyMedium14B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 14px;
          line-height: 150%;
        `
      : null,
  bodyMedium14Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 14px;
          line-height: 150%;
        `
      : null,
  bodyMedium14R: (f?: boolean) =>
    f
      ? css`
          font-weight: ${regular};
          font-size: 14px;
          line-height: 150%;
        `
      : null,
  bodySmall12B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 12px;
          line-height: 150%;
        `
      : null,
  bodySmall12Sb: (f?: boolean) =>
    f
      ? css`
          font-weight: ${semiBold};
          font-size: 12px;
          line-height: 150%;
        `
      : null,
  bodySmall12R: (f?: boolean) =>
    f
      ? css`
          font-weight: ${regular};
          font-size: 12px;
          line-height: 150%;
        `
      : null,
  bodyXSmall10B: (f?: boolean) =>
    f
      ? css`
          font-weight: ${bold};
          font-size: 10px;
          line-height: 150%;
        `
      : null,
  bodyXSmall10R: (f?: boolean) =>
    f
      ? css`
          font-weight: ${regular};
          font-size: 10px;
          line-height: 150%;
        `
      : null,
  ...textVariant,
};

export default text;

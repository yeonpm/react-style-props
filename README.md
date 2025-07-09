# react-style-props

Style your React components using defined style props easily.

## install

```bash
npm install react-style-props
```

## usage

```tsx
// set up YourComponent.tsx
import { HtmlHTMLAttributes, ReactElement, Ref, forwardRef } from "react";
import styled from "@emotion/styled";
import { DefaultConfigType, resolveProps } from "react-style-props"; // add...(1)

export interface YourComponentInterface
  extends HtmlHTMLAttributes<HTMLDivElement>,
    DefaultConfigType {} // add...(2)

const YourComponent = ({ children, ...props }: YourComponentInterface): ReactElement => {
  const { styleString, otherProps } = resolveProps(props); // add...(3)

  return (
    <$YourComponent css={styleString} {...otherProps} {/** add...(4) */}>
      {children}
    </$YourComponent>
  );
};

export default YourComponent;

const $YourComponent = styled("div")<any>`
  ${({ css }) => css} // add...(5)
`;
```

```tsx
// use
<YourComponent ac fullV>
  <YourTxt fs={14} fw={700} mr0mlAuto mouseCss>
    Hello
  </YourTxt>
</YourComponent>
```

## Supported props

- All CSS properties are supported

### Special Style Props

#### Layout Props

- `flex`: Enable flex display
- `jc`: Enable flex and justify-content: center
- `ac`: Enable flex and align-items: center
- `between`: Enable flex with justify-content: space-between
- `column`, `col`: Enable flex with flex-direction: column
- `row`: Enable flex with flex-direction: row
- `absolute`, `fixed`, `relative`, `sticky`: Set position

#### Size Props

- `w`, `width`: Set element width
- `h`, `height`: Set element height
- `size`: Set both width and height (can use array [width, height] or widthHeight)
- `fullP`: Set width: 100% and height: 100%
- `fullV`: Set width: 100vw and height: 100vh

#### Margin & Padding Props

- `m`, `margin`: Set all margins
- `mx`: Set horizontal margins (left & right)
- `my`: Set vertical margins (top & bottom)
- `mt`, `mr`, `mb`, `ml`: Set individual margins
- `p`, `padding`: Set all padding
- `px`: Set horizontal padding
- `py`: Set vertical padding
- `pt`, `pr`, `pb`, `pl`: Set individual padding

#### Text Props

- `fs`, `fontSize`: Set font size
- `fw`, `fontWeight`: Set font weight
- `textCenter`: Set text-align: center
- `textLeft`: Set text-align: left
- `textRight`: Set text-align: right
- `ellipsis`: Enable text ellipsis with overflow

#### Mouse Interaction Props

- `pointer`: Set cursor: pointer
- `mouseCss`: Apply hover and active effects for mouse interaction

#### Border Props

- `round3`, `round4`, `round5`, `round8`: Preset border-radius values
- `border`: Set border style
- `borderRadius`: Set border radius

##### Font Style Classification

###### Heading (for titles)

- **Size**: 26px ~ 34px
- **line-height**: 180%
- **Purpose**: Page titles, section titles, main headings

```typescript
// 34px heading styles
heading34B; // Bold (800)
heading34SB; // SemiBold (700)
heading34M; // Medium (600)
heading34SM; // SemiMedium (500)
heading34R; // Regular (400)
heading34L; // Light (300)

// 32px heading styles
heading32B, heading32SB, heading32M, heading32SM, heading32R, heading32L;

// 30px heading styles
heading30B, heading30SB, heading30M, heading30SM, heading30R, heading30L;

// 28px heading styles
heading28B, heading28SB, heading28M, heading28SM, heading28R, heading28L;

// 26px heading styles
heading26B, heading26SB, heading26M, heading26SM, heading26R, heading26L;
```

###### Text (for body content)

- **Size**: 8px ~ 24px
- **line-height**: 160%
- **Purpose**: Body text, button text, description text

```typescript
// 24px text styles
text24B, text24SB, text24M, text24SM, text24R, text24L;

// 22px text styles
text22B, text22SB, text22M, text22SM, text22R, text22L;

// 20px text styles
text20B, text20SB, text20M, text20SM, text20R, text20L;

// 18px text styles
text18B, text18SB, text18M, text18SM, text18R, text18L;

// 16px text styles (default body)
text16B, text16SB, text16M, text16SM, text16R, text16L;

// 14px text styles
text14B, text14SB, text14M, text14SM, text14R, text14L;

// 12px text styles
text12B, text12SB, text12M, text12SM, text12R, text12L;

// 10px text styles
text10B, text10SB, text10M, text10SM, text10R, text10L;

// 8px text styles
text8B, text8SB, text8M, text8SM, text8R, text8L;
```

##### Font Weight

Each size provides 6 different weights:

- **B (Bold)**: 800 - Boldest text, for emphasis
- **SB (SemiBold)**: 700 - Bold text, for subtitles
- **M (Medium)**: 600 - Medium weight, for emphasized text
- **SM (SemiMedium)**: 500 - Slightly bold text
- **R (Regular)**: 400 - Default weight, for body text
- **L (Light)**: 300 - Light text, for additional information

#### Other Props

- `none`: Set display: none
- `jc`: Set justify-content: center with display: flex
- `ac`: Set align-items: center with display: flex
- `mr0mlAuto`: Set margin-right: 0; margin-left: auto;
- `ml0mrAuto`: Set margin-left: 0; margin-right: auto;

**More props are available. See [github: react-style-props ...types/index.d.ts](https://github.com/yeonpm/react-style-props/blob/main/src/style/configs/types/index.d.ts)**

## License

MIT

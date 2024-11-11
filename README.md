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
import { DefaultConfigType, seperateStyleString } from "react-style-props"; // add...(1)

export interface YourComponentInterface
  extends HtmlHTMLAttributes<HTMLDivElement>,
    DefaultConfigType {} // add...(2)

const YourComponent = ({ children, ...props }: YourComponentInterface): ReactElement => {
  const { styleString, otherProps } = seperateStyleString(props); // add...(3)

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

#### Other Props

- `none`: Set display: none
- `jc`: Set justify-content: center
- `ac`: Set align-items: center
- `mr0mlAuto`: Set margin-right: 0; margin-left: auto;
- `ml0mrAuto`: Set margin-left: 0; margin-right: auto;

**More props are available. See [src/index.ts](./src/index.ts)**

## License

MIT

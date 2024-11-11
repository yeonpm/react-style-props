import defaultConfig from "./configs";
import { ConfigKeyType } from "./configs/types/common";

export default function seperateStyleString(
  props: any,
  additionalConfig?: any
) {
  const totalKeys: string[] = Object.keys(props) as string[];
  const targetConfig = { ...additionalConfig, ...defaultConfig };
  const configKeys = Object.keys(targetConfig) as (keyof ConfigKeyType)[];

  let targetPropsKeys: string[] = [];
  let otherPropsKeys: string[] = [];
  totalKeys.forEach((prop, i: number) => {
    if (prop in props && configKeys.includes(prop)) {
      targetPropsKeys.push(totalKeys[i]);
    } else {
      otherPropsKeys.push(prop);
    }
  });

  const styleProps = targetPropsKeys.map((key: keyof ConfigKeyType) =>
    targetConfig?.[key](props[key])
  );
  const styleString = styleProps.join(" ");
  const stylePropsArray = Array.from(new Set(styleString.split(";")));
  const formattedStyleString: string = stylePropsArray.join(";");
  const cssString = props.css || "";

  const otherProps: any = otherPropsKeys.reduce((acc: any, propKey: string) => {
    acc[propKey] = props[propKey];
    return acc;
  }, {});

  return {
    styleString: formattedStyleString + (cssString ? ";" + cssString : ""),
    otherProps: otherProps as any,
  };
}

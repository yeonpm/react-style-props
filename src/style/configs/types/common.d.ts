import { DefaultConfigType } from "./index.d";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export declare type ElementTypes = {
  [Tag in keyof JSX.IntrinsicElements]: ElementType;
};

export declare type ConfigKeyType = {
  [key: string]: (e: any) => string;
};

export declare type numStr = number | string;

export interface Props extends ConfigKeyType, DefaultConfigType {
  children?: any;
  customConfig?: any;
  css?: string;
  [key: string]: any;
  hover?: string;
  active?: string;
  // dependencies?: any[];
}

export type ElementType = ForwardRefExoticComponent<
  Props & RefAttributes<HTMLElement>
>;

import {ConfigKeyType} from './types/common';

const color = {
  background: (background: string) => `background:${background};`,
  backgroundColor: (backgroundColor: string) => `background-color:${backgroundColor};`,
  bg: (background: string) => `background:${background};`,
  color: (color: string) => `color:${color};`,
  white: () => `background:white;`,
  red: () => `background:red;`,
} as ConfigKeyType;

export default color;

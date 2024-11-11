declare type ConfigKeyType = {
  [key: string]: (e: any) => string;
};

declare type numStr = number | string;

export type { ConfigKeyType, numStr };

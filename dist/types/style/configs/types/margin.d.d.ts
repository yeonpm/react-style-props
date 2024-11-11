import { numStr } from './common.d.js';

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

export type { MarginConfigType };

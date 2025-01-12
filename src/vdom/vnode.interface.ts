export interface VNode {
  type: string;
  props?: VNodeProps;
  children?: VNodeChild[];
}

export interface VNodeProps {
  [key: string]: string | number | boolean | undefined;
}

export type VNodeChild = VNode | string;

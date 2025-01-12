import { VNode } from "./vnode.interface";

/**
 * Creates a Virtual Node that can be rendered as an HTML Element
 * @param type The HTML Element tag via string eg. 'div'
 * @param props The HTML Element attributes eg. {'id': 'test',}
 * @param children Child node or string
 * @returns Virtual Node object (tree)
 */

export function createElement(
  type: VNode["type"],
  props: Partial<VNode["props"]> = {},
  children: VNode["children"] = [],
): VNode {
  return {
    type,
    props,
    children,
  };
}

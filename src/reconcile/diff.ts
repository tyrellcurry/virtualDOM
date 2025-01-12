import { VNode } from "../vdom/vnode.interface";

export function diff(prevVNode: VNode, updatedVNode: VNode) {
  // 1. Different node types? Replace the old node.
  if (prevVNode.type !== updatedVNode.type) return updatedVNode;

  // 2. Compare props: generate a patch for changed props.

  // 3. Compare children: recursively diff each child.
}

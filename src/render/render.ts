import { VNode } from "../vdom/vnode.interface";
import { VDOMError, renderNode } from "./utils";

/**
 * Renders a virtual DOM tree to actual DOM nodes
 * @param vnode The root virtual node to render
 * @returns The rendered DOM node
 * @throws {VDOMError} If there's an error during rendering
 */

export const renderDOM = (vnode: VNode): Node => {
  try {
    return renderNode(vnode);
  } catch (error) {
    if (error instanceof VDOMError) {
      throw error;
    }
    throw new VDOMError("Failed to render virtual DOM");
  }
};

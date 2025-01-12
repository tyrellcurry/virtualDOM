import { VNode, VNodeChild, VNodeProps } from "../vdom/vnode.interface";

// Error types
export class VDOMError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "VDOMError";
  }
}

// Utility functions
export const isVNode = (node: VNodeChild): node is VNode => {
  return typeof node === "object" && node !== null;
};

const setAttributes = (element: HTMLElement, props: VNodeProps): void => {
  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined) {
      if (key.startsWith("on") && typeof value === "function") {
        // Event listener, add it to the element
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        // Convert non-string values to strings
        element.setAttribute(key, String(value));
      }
    }
  });
};

// Core rendering functions
const createTextNode = (text: string): Text => {
  return document.createTextNode(text);
};

const createElement = (type: string): HTMLElement => {
  try {
    return document.createElement(type);
  } catch (error) {
    throw new VDOMError(`Invalid element type: ${type}`);
  }
};

export const renderNode = (vnode: VNodeChild): Node => {
  // Handle text nodes
  if (typeof vnode === "string") {
    return createTextNode(vnode);
  }

  // Create element
  const element = createElement(vnode.type);

  // Set attributes
  if (vnode.props) {
    setAttributes(element, vnode.props);
  }

  // Render children
  if (vnode.children) {
    vnode.children.forEach((child) => {
      const childNode = renderNode(child);
      element.appendChild(childNode);
    });
  }

  return element;
};

import "./style.css";
import { renderDOM } from "./render/render.ts";
import { VNode } from "./vdom/vnode.interface.ts";

// Create virtual DOM tree
const vnode: VNode = {
  type: "div",
  props: {
    class: "container",
    id: "main",
  },
  children: [
    {
      type: "h1",
      children: ["Hello World"],
    },
    {
      type: "p",
      props: { class: "content" },
      children: ["This is a paragraph"],
    },
    "Plain text",
  ],
};

// Render the virtual DOM into a real DOM element
const domNode = renderDOM(vnode);

// Find the container element to append the rendered element
const appContainer = document.querySelector<HTMLDivElement>("#app");

// Append the rendered element to the appContainer
if (appContainer) {
  appContainer.appendChild(domNode); // Append the rendered DOM element
}

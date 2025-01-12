import "./style.css";
import { renderDOM } from "./render/render.ts";
import SimpleSample from "./components/SimpleSample.ts";

const rootElement = document.getElementById("app");
if (rootElement) {
  const domNode = renderDOM(SimpleSample);
  rootElement.appendChild(domNode);
}

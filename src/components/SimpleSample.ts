import { createElement } from "../vdom/vnode";

const handleClick = () => {
  alert("You clicked me!");
};

const SimpleSample = createElement("div", { id: "app" }, [
  createElement("h1", { class: "title" }, ["My Virtual DOM"]),
  createElement("div", { class: "content" }, [
    createElement("p", {}, ["This is a paragraph"]),
    createElement("button", { onclick: handleClick }, ["Click me"]),
  ]),
]);

export default SimpleSample;

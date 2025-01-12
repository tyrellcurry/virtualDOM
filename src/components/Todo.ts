import { createElement } from "../vdom/vnode";

function createTodoItem(text: string, completed: boolean = false) {
  return createElement("div", { class: "todo-item" }, [
    createElement("input", {
      type: "checkbox",
      checked: completed ? "checked" : undefined,
    }),
    createElement(
      "span",
      {
        class: completed ? "completed" : "",
      },
      [text],
    ),
    createElement("button", { class: "delete-btn" }, ["Delete"]),
  ]);
}

const Todo = createElement("div", { class: "todo-list" }, [
  createTodoItem("Learn Virtual DOM", true),
  createTodoItem("Build Components"),
  createTodoItem("Write Documentation"),
]);

export default Todo;

import { describe, expect, test } from "vitest";
import { createElement } from "../vnode";

describe("VNode Tests", () => {
  const testNode = createElement("div", { id: "test" }, ["hello world"]);
  const testNodeWithChildNode = createElement("span", { class: "test" }, [
    "test",
    testNode,
  ]);
  const testNodeNoPropsNoChildren = createElement("span");

  test("returns node as object", () => {
    expect(testNode).toEqual({
      type: "div",
      props: { id: "test" },
      children: ["hello world"],
    });
  });
  test("returns children nodes", () => {
    expect(testNodeWithChildNode).toEqual({
      type: "span",
      props: { class: "test" },
      children: ["test", testNode],
    });
  });
  test("return node with no props or children when not passed", () => {
    expect(testNodeNoPropsNoChildren).toEqual({
      type: "span",
      props: {},
      children: [],
    });
  });
});

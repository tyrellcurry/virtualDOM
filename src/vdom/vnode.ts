import { Ivnode } from "./vnode.interface";

export function createElement(
  type: Ivnode["type"],
  props: Partial<Ivnode["props"]> = {},
  children: Ivnode["children"] = [],
): Ivnode {
  return {
    type,
    props,
    children,
  };
}

import { JSXElement } from "solid-js";
import { PAGE_PATHS } from "./constants";

export type RouteItem = {
  path: PAGE_PATHS;
  component: () => JSXElement;
};

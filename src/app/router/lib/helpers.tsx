import { Route } from "@solidjs/router";
import { RouteItem } from "./types";

export const generateRoutes = (routes: RouteItem[]) =>
  routes.map(({ path, component }) => (
    <Route path={path} component={component} />
  ));

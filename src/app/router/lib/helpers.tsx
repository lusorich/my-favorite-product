import { Route } from '@solidjs/router';
import { RouteItem } from './types';

export const generateRoutes = (routes: RouteItem[]) =>
  /* eslint-disable-next-line */
  routes.map(({ path, component }) => (
    <Route path={path} component={component} />
  ));

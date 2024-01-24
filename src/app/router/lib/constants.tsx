import { PublicPage } from 'pages/public';
import { RouteItem } from './types';
import { MainLayout } from 'layouts/main/MainLayout';

export const enum PAGE_PATHS {
  /* eslint-disable-next-line */
  MAIN = '/',
}

export const ROUTES: RouteItem[] = [
  {
    path: PAGE_PATHS.MAIN,
    component: () => (
      <MainLayout>
        <PublicPage />
      </MainLayout>
    ),
  },
] as const;

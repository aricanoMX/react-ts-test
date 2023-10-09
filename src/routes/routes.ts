import { LazyExoticComponent, lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () => import(/* webpackChunkName: LazyLayout */ '../01-lazyload/layout/LazyLayout'),
);
// const Lazy1 = lazy(() => import(/* webpackChunkName: Lazy1 */ '../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: Lazy2 */ '../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: Lazy3 */ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    component: LazyLayout,
    name: 'Dashboard',
  },
  {
    to: '/lazy-1',
    path: 'Lazy1',
    component: LazyPage1,
    name: 'Lazy-1',
  },
  {
    to: '/lazy-2',
    path: 'Lazy2',
    component: LazyPage2,
    name: 'Lazy-2',
  },
  {
    to: '/lazy-3',
    path: 'Lazy3',
    component: LazyPage3,
    name: 'Lazy-3',
  },
  {
    to: '/no-lazy',
    path: 'No-Lazy',
    component: NoLazy,
    name: 'No Lazy',
  },
];

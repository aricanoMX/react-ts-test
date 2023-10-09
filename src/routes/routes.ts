import { LazyExoticComponent, lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: Lazy1*/ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: Lazy2*/ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: Lazy3*/ '../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy-1',
    path: 'Lazy1',
    // component: LazyPage1,
    component: Lazy1,
    name: 'Lazy-1',
  },
  {
    to: '/lazy-2',
    path: 'Lazy2',
    // component: LazyPage2,
    component: Lazy2,
    name: 'Lazy-2',
  },
  {
    to: '/lazy-3',
    path: 'Lazy3',
    // component: LazyPage3,
    component: Lazy3,
    name: 'Lazy-3',
  },
];

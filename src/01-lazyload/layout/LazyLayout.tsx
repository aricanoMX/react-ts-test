import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes/routes';

export const LazyLayout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <NavLink to={path} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path='/*' element={<Navigate to={routes[2].to} replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;

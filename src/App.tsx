import { createHashRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import TimeAttackPage from './pages/TimeAttackPage';
import ForzaPage from './pages/ForzaPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'drift', element: <DriftPage /> },
      { path: 'timeattack', element: <TimeAttackPage /> },
      { path: 'forza', element: <ForzaPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

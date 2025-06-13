import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from '../layout/Layout';
import HomePage from '@pages/HomePage/HomePage';

import { aboutUsPageRoute } from '@pages/AboutUsPage/routes';
import { projectsPageRoute } from '@pages/ProjectDetailPage/routes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Лайаут
    children: [
      { index: true, element: <HomePage /> },
      ...projectsPageRoute,
      ...aboutUsPageRoute,
      { path: '*', element: <Navigate to="/" replace/> }, // Для несуществующих роутов
    ],
  },
]);

export default router;
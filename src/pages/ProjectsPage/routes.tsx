import { RouteObject } from "react-router-dom";

import ProjectsPage from "./ProjectsPage";
import ProjectDetailsPage from "./ProjectDetailsPage";

export const projectsPageRoute: RouteObject[] = [
  {
    path: 'projects',
    children: [
      { index: true, element: <ProjectsPage /> },
      { path: ':id', element: <ProjectDetailsPage /> },
    ]
  }
]
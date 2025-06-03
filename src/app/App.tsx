import { Routes, Route, Navigate } from 'react-router-dom'
// components

import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage'
import HomePage from '../pages/HomePage/HomePage'
import Layout from './Layout/Layout'
import ProjectDetailsPage from '../pages/ProjectsPage/ProjectDetailsPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='projects' element={<ProjectsPage />}/>
        <Route path='projects/:id' element={<ProjectDetailsPage/>} />
        <Route path='aboutus' element={<AboutUsPage />} />

        {/* Редирект с несущствующих роутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

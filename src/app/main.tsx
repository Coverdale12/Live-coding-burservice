import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Providers
import ReactRouter from './Providers/ReactRouterProvider.tsx'
import ReactQueryProvider from './Providers/ReactQueryProvider.tsx'
import MuiThemeProvider from './Providers/MuiThemeProvider.tsx'

import "./global.scss"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactRouter>
      <ReactQueryProvider>
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </ReactQueryProvider>
    </ReactRouter>
  </StrictMode>,
)

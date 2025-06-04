import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Providers
import ReactRouter from './providers/ReactRouterProvider.tsx'
import ReactQueryProvider from './providers/ReactQueryProvider.tsx'
import MuiThemeProvider from './providers/MuiThemeProvider.tsx'

import "./global/global.scss"
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

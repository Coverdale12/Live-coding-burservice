import { ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"


type ReactRouterProps = {
  children: ReactNode;
}

const ReactRouter = ({ children }: ReactRouterProps) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>)
}

export default ReactRouter
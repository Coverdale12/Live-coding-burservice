import { RouterProvider } from "react-router-dom";
import router from "./routesConfig";

export default function AppRouter(){
  return <RouterProvider router={router} />
}
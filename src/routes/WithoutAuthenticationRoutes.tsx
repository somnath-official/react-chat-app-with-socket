import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Outlet, RouteObject } from "react-router-dom";

export const WithoutAuthenticationRoutes:RouteObject = {
  path: '/',
  element: <Outlet />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
}

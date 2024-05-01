import { Chat } from "@/pages/Chat";
import { AuthGuard } from "@/guards/AuthGuard";
import { Outlet, RouteObject } from "react-router-dom";

export const WithAuthenticationRoutes:RouteObject = {
  path: '/',
  element:  <AuthGuard><Outlet /></AuthGuard>,
  children: [
    {
      path: '/chat',
      element: <Chat />
    },
  ]
}
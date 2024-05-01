import { GuestGuard } from "@/guards/GuestGuard";
import { Login } from "@/pages/Auth/Login";
import { Outlet, RouteObject } from "react-router-dom";

export const AuthRoutes: RouteObject = {
  path: '/',
  element: <GuestGuard><Outlet /></GuestGuard>,
  children: [
    {
      path: '/login',
      element: <Login />
    },
  ]
}
import {useRoutes } from "react-router-dom"
import { WithAuthenticationRoutes } from "./WithAuthenticationRoutes";
import { WithoutAuthenticationRoutes } from "./WithoutAuthenticationRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const Rotres = () => {
  return useRoutes([
    WithoutAuthenticationRoutes,
    AuthRoutes,
    WithAuthenticationRoutes,
  ])
}
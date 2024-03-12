import { BitcoinRoutes } from "@/features/cryptocurrencies";
import { Landing } from "@/features/misc";
import { PlanRoute } from "@/features/plans";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

export const ProtectedRoutes: RouteObject[] = [
  {
    path: "/app",
    element: <MainLayoutWrapper />,
    children: [
      { path: "", element: <Landing /> }, // Redirect /app to /app/plans
      { path: "/app/plans/*", element: <PlanRoute /> },
      { path: "/app/crypto/bitcoin/*", element: <BitcoinRoutes /> },
    ],
  },
];

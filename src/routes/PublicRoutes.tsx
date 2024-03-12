import { BitcoinRoutes } from "@/features/cryptocurrencies";
import { RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayoutWrapper />,
    children: [
      { path: "", element: <BitcoinRoutes /> }, // Redirect /app to /app/plans
    ],
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];

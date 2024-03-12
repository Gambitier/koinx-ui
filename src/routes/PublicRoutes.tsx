import { BitcoinRoutes } from "@/features/cryptocurrencies";
import { RouteObject } from "react-router-dom";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <BitcoinRoutes />,
  },
  // import { AuthRoutes } from '@/features/auth';
  //   {
  //     path: "/auth/*",
  //     element: <AuthRoutes />,
  //   },
];

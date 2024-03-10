import DrawerAppBar from "./DrawerAppBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <DrawerAppBar>{children}</DrawerAppBar>;
};

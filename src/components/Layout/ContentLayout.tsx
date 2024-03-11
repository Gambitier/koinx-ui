import { Head } from "@/components/Head";
import { Box } from "@mui/material";
import React from "react";

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Box marginX={4} marginY={2}>
        {children}
      </Box>
    </>
  );
};

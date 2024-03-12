import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

type TabPanelProps = {
  label: string;
  children?: React.ReactNode;
};

export const TabPanel = ({ label, children }: TabPanelProps) => {
  return (
    <Card sx={{ marginY: 1 }}>
      <CardHeader title={<Typography variant="h5">{label}</Typography>} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

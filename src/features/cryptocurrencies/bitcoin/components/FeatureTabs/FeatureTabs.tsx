import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { OverviewTabContent, TabPanel } from "./OverviewTabContent";

const tabAndPanels = [
  { label: "Overview", component: <OverviewTabContent /> },
  { label: "Fundamentals", component: <OverviewTabContent /> },
  { label: "News Insights", component: <OverviewTabContent /> },
  { label: "Sentiments", component: <OverviewTabContent /> },
  { label: "Team", component: <OverviewTabContent /> },
  { label: "Technicals", component: <OverviewTabContent /> },
  { label: "Tokenomics", component: <OverviewTabContent /> },
];

function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabAndPanels.map((tab) => {
          return <Tab key={tab.label} label={tab.label} />;
        })}
      </Tabs>

      <SwipeableViews index={value} onChangeIndex={setValue}>
        {tabAndPanels.map((tab, _) => (
          <TabPanel key={tab.label} label={tab.label}>
            {tab.component}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export const FeatureTabs = () => {
  return <ScrollableTabsButtonAuto />;
};

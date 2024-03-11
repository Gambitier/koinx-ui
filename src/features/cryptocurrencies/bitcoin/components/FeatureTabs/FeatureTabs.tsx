import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { OverviewTabContent } from "./OverviewTabContent";
import { TabPanel } from "./TabPanel";

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

      {/* TODO: fix this swipable tab panel, uncommenting messes up the width of page */}
      {/* <SwipeableViews index={value} onChangeIndex={setValue}>
        {tabAndPanels.map((tab, _) => (
          <TabPanel key={tab.label} label={tab.label} />
        ))}
      </SwipeableViews> */}

      <TabPanel label={tabAndPanels[0].label}>
        {tabAndPanels[0].component}
      </TabPanel>
    </Box>
  );
}

export const FeatureTabs = () => {
  return <ScrollableTabsButtonAuto />;
};

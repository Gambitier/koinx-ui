import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Chip from "@mui/material/Chip";
import React from "react";

type PriceChangeProps = {
  avatar?: JSX.Element;
  changeDirection: "increase" | "decrease" | "neutral";
  priceChange: string;
};

export const PriceChange: React.FC<PriceChangeProps> = ({
  changeDirection,
  avatar,
  priceChange,
}) => {
  const getIconByDirection = () => {
    switch (changeDirection) {
      case "increase":
        return <TrendingUpIcon />;
      case "decrease":
        return <TrendingDownIcon />;
      case "neutral":
      default:
        return <TrendingFlatIcon />;
    }
  };

  const icon = avatar ? avatar : getIconByDirection();
  const color =
    changeDirection == "increase" || changeDirection == "neutral"
      ? "success"
      : "error";

  return (
    <Chip
      sx={{ borderRadius: 1, padding: 1, width: 100 }}
      // size="small"
      color={color}
      icon={icon}
      label={priceChange}
    />
  );
};

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export const CryptoBreadcrumb = () => {
  return (
    <Breadcrumbs
      separator={
        <>
          <ChevronRightIcon style={{ margin: "-8px" }} />
          <ChevronRightIcon style={{ margin: "-8px" }} />
        </>
      }
      aria-label="breadcrumb"
    >
      <Link underline="none" href="/">
        Cryptocurrencies
      </Link>
      <Typography>Bitcoin</Typography>
    </Breadcrumbs>
  );
};

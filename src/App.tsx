import { lightThemeOptions } from "@/lightThemeOptions";
import { ThemeProvider, createTheme } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={createTheme(lightThemeOptions)}>
      <BrowserRouter>
        <HelmetProvider>
          <AppRoutes />
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

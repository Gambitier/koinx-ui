import { Route, Routes } from "react-router-dom";
import Bitcoin from "./Bitcoin";

export const BitcoinRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Bitcoin />} />
      {/* Example: You can add more routes related to plan feature here */}
      {/* <Route path="/create" element={<CreatePlan />} /> */}
    </Routes>
  );
};

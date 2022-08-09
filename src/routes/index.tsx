import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Solution from "../pages/Solution";

const AvailableRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution" element={<Solution />} />
    </Routes>
  );
};

export default AvailableRoutes;

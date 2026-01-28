import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

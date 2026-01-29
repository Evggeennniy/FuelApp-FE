import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import ServicesPage from "../pages/services/ServicesPage";
import MockApplePay from "../pages/MockApplePay/MockApplePay";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/mock-apple-pay" element={<MockApplePay />} />
    </Routes>
  );
}

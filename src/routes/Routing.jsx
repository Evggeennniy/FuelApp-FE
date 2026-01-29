import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import ServicesPage from "../pages/services/ServicesPage";
import MockApplePay from "../pages/MockApplePay/MockApplePay";
import ThankYouPage from "../pages/thank-you/ThankYouPage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/mock-apple-pay" element={<MockApplePay />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

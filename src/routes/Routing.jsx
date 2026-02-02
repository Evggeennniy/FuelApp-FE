import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import ServicesPage from "../pages/services/ServicesPage";
import ThankYouPage from "../pages/thank-you/ThankYouPage";
import ProfilePage from "../pages/profile/ProfilePage";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<ServicesPage />} />

      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

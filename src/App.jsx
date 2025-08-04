import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Entry from "./pages/entry/entry";
import Terms from "./pages/T&C/tc";
import Booked from "./pages/booked/booked";
import FeaturesPage from "./pages/featurespage/feature";
import RegisterPage from "./pages/register/register";
import SimpleOwnerContact from "./pages/contacts/contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AdminRedirect from "./pages/redirectAdmin/redirectAdmin";

// ✅ Admin-only route protection
const ProtectedAdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user || !user.isAdmin) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<SimpleOwnerContact />} />
        <Route path="/booked" element={<Booked />} />
        <Route path="/FeaturesPage" element={<FeaturesPage />} />

        {/* ✅ Admin panel redirect route */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminRedirect />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

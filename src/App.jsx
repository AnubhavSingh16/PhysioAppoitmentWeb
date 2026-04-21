import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookAppointment from "./Pages/BookAppointment"; 
import Homepage from "./Pages/Homepage";
import BookingConfirmation from "./Pages/BookingConfirmation";
import MyState from './Context/myState';
import ProtectedRoute from './Context/ProtectedRoute'; 
// import ProtectedAdminRoute from './Admin/ProtectedAdminRoute'; 
// import Dashboard from "./Admin/Dashboard";
// import SignIn from "./Admin/Signin";
import AboutPage from "./Pages/AboutPage";
import ContactusPage from "./Pages/ContactusPage";
import OffersPage from "./Pages/OffersPage";
import CarePage from "./Pages/CarePage";
import ServicesPage from "./Pages/ServicesPage";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactusPage />} />
          <Route path="/all-offers" element={<OffersPage />} />
          <Route path="/care" element={<CarePage />} />
          <Route path="/all-services" element={<ServicesPage />} />

          {/* <Route 
            path="/dashboard" 
            element={
              <ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>
            } 
          />
          <Route path="/admin/auth-signin" element={<SignIn />} />
           */}
          <Route 
            path="/confirmation-appointment" 
            element={
              <ProtectedRoute>
                <BookingConfirmation />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
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
import HeaderBar from "./components/HeaderBar/HeaderBar";

function NavigationChrome() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return <HeaderBar />;
  }

  return (
    <div className="fixed top-3 left-3 z-40 sm:top-4 sm:left-4">
      <Link
        to="/"
        aria-label="Go to homepage"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white text-slate-800 shadow-lg shadow-slate-900/10 transition-transform duration-200 hover:scale-105"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
    </div>
  );
}

function App() {
  return (
    <MyState>
      <Router>
        <NavigationChrome />
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

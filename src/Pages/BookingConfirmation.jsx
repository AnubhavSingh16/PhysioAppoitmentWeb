import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10); // Start with 5 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1); // Decrement the time left
    }, 1000);
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: "url('./aboutus.jpg')" }}
  >
    {/* Overlay to blur the background */}
    <div className="absolute inset-0 backdrop-blur-sm"></div>
  
    {/* Content on top of the blurred background */}
    <div className="relative text-center bg-white bg-opacity-70 p-16 rounded-xl shadow-lg">
      <h1 className="text-5xl">Thank you for choosing us!</h1>
      <h2 className="text-3xl mt-4">
        Your appointment is confirmed, we will get back to you soon.
      </h2>
      <p className="mt-8 text-xl bg-blue-400 text-white p-2 rounded-2xl">
        Redirecting in {timeLeft} seconds...
      </p>
    </div>
  </div>
  
  );
}

export default BookingConfirmation;

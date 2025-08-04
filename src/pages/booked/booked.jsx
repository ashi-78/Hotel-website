import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./booked.css";

const Booked = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect to home
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="bookedContainer">
      <div className="bookedCard">
        <FaCheckCircle className="successIcon" />
        <h1>Booking Confirmed!</h1>
        <p>Your hotel has been successfully booked. We look forward to welcoming you!</p>
        <p className="redirectMsg">
          Redirecting you to the home page in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default Booked;

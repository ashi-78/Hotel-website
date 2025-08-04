import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./mailList.css";

// Background image

const MailList = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/booked");
  };

  return (
    <div className="mailContainer" >
      {/* Overlay */}
      <div className="mailOverlay"></div>

      {/* Content */}
      <div className="mailGlass">
        <h1 className="mailTitle">🚀 Save Time, Save Money!</h1>
        <p className="mailDesc">
          Subscribe now to unlock exclusive travel deals, hidden gems, and insider tips for your next adventure!
        </p>

        <div className="mailInputWrapper">
          <input
            type="email"
            className="mailInput"
            placeholder="Enter your email"
          />
          <button className="subscribeBtn" onClick={handleSubscribe}>
            <FaPaperPlane /> Subscribe
          </button>
        </div>

        <p className="mailPrivacy">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default MailList;

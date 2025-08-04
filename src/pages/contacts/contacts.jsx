import "./contacts.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";
import ownerPhoto from "../../assets/owner-img.jpg"

const BetterOwnerContact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <h1><div className="logo">Elysian Escapes</div></h1>
          <p>Your trusted destination for luxury hotel experiences</p>
        </div>

        <div className="owner-info">
          <div className="owner-image">
              <img src={ownerPhoto} alt="Owner" />
          </div>
          <div className="owner-details">
            <h2>Meet the Owner</h2>
            <p><strong>Name:</strong> Ashi Kashyap</p>
            <p><FaEnvelope /> ashikashyap131@gmail.com</p>
            <p><FaMapMarkerAlt /> Lucknow, India</p>
            <p><FaLinkedin /> <a href="https://www.linkedin.com/in/ashi-k-a89061304" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <p><strong>Vision:</strong> To simplify travel and accommodation with <br></br>cutting-edge technology and exceptional service.</p>
         
          </div>
        </div>
        <div className="website-info">
          <h3>About Elysian Escapes</h3>
          <p>
            Elysian Escapes is a modern hotel booking platform designed to deliver seamless and reliable travel experiences.<br></br>
            From budget-friendly stays to luxury resorts, we connect travelers with verified accommodations worldwide.
          </p>
          <ul>
            <li>✔ User-friendly booking system</li>
            <li>✔ Verified hotel listings</li>
            <li>✔ Real-time availability & pricing</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </div>

    <div className="aurora-wrapper">
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>
      <div className="aurora aurora-3"></div>
    </div>
  <div className="contact-card">
    {/* your content here */}
  </div>


        <div className="support-section">
          <h3>Help & Support</h3>
          <p>
            For booking issues, cancellations or feedback, email us at{" "}
            <a href="mailto:support@elysianescapes.com">support@elysianescapes.com </a>
            or call us at <FaPhone /> 
          </p>
        </div>

        <div className="footer-note">
          <p>© 2025 Elysian Escapes. Built with care ❤️ by Ashi Kashyap.</p>
        </div>
      </div>
    </div>
  );
};

export default BetterOwnerContact;

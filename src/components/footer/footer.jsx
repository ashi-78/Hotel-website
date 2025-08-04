// import { Link } from "react-router-dom";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="fLists">
//         <ul className="fList">
//           <li><Link className="fListItem" to="/home">Countries</Link></li>
//           <li><Link className="fListItem" to="/home">Regions</Link></li>
//           <li><Link className="fListItem" to="/home">Cities</Link></li>
//           <li><Link className="fListItem" to="/home">Districts</Link></li>
//           <li><Link className="fListItem" to="/home">Airports</Link></li>
//           <li><Link className="fListItem" to="/home">Hotels</Link></li>
//         </ul>
//         <ul className="fList">
//           <li><Link className="fListItem" to="/home">Homes</Link></li>
//           <li><Link className="fListItem" to="/home">Apartments</Link></li>
//           <li><Link className="fListItem" to="/home">Resorts</Link></li>
//           <li><Link className="fListItem" to="/home">Villas</Link></li>
//           <li><Link className="fListItem" to="/home">Hostels</Link></li>
//           <li><Link className="fListItem" to="/home">Guest Houses</Link></li>
//         </ul>
//         <ul className="fList">
//           <li><Link className="fListItem" to="/FeaturesPage">Unique places to stay</Link></li>
//           <li><Link className="fListItem" to="/FeaturesPage">Reviews</Link></li>
//           <li><Link className="fListItem" to="/FeaturesPage">Unpacked: Travel articles</Link></li>
//           <li><Link className="fListItem" to="/FeaturesPage">Travel communities</Link></li>
//           <li><Link className="fListItem" to="/FeaturesPage">Seasonal and holiday deals</Link></li>
//         </ul>
//         <ul className="fList">
//           <li><Link className="fListItem" to="/terms">Customer Service</Link></li>
//           <li><Link className="fListItem" to="/terms">Partner Help</Link></li>
//           <li><Link className="fListItem" to="/terms">Careers</Link></li>
//           <li><Link className="fListItem" to="/terms">Sustainability</Link></li>
//           <li><Link className="fListItem" to="/terms">Press Center</Link></li>
//           <li><Link className="fListItem" to="/terms">Safety Resource Center</Link></li>
//           <li><Link className="fListItem" to="/terms">Investor Relations</Link></li>
//           <li><Link className="fListItem" to="/terms">Terms & Conditions</Link></li>
//         </ul>
//       </div>
//       <div className="fText">© 2025 Elysian Escapes. Built with care ❤️</div>
//     </div>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG, FaFlickr } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo & Slogan */}
          <div className="footer-logo">
            <h2>Elysian Escapes</h2>
            <p>your perfect stays</p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <ul>
              <li><Link to="/home">Homes</Link></li>
              <li><Link to="/home">Apartments</Link></li>
              <li><Link to="/home">Hotels</Link></li>
            </ul>
            <ul>
              <li><Link to="/home">Unique places to stay</Link></li>
              <li><Link to="/FeaturesPage">Reviews</Link></li>
            </ul>
            <ul>
              <li><Link to="/FeaturesPage">Safety Resource Center</Link></li>
              <li><Link to="/FeaturesPage">Seasonal and holiday deals</Link></li>
              <li><Link to="/terms">Support</Link></li>
            </ul>
            <ul>
              <li><Link to="/contact">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Partner Help</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaRss /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaFlickr /></a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">© 2025 Elysian Escapes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

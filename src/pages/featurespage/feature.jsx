import React from "react";
import "./feature.css";

// Import images from assets folder
import h1 from "../../assets/h1.avif"
import h2 from "../../assets/h2.avif";
import h3 from "../../assets/h3.avif";
import d1 from "../../assets/h10.avif";
import d2 from "../../assets/h12.avif";
import d3 from "../../assets/h13.avif";

const FeaturesPage = () => {
  return (
    <div className="featuresPage">
      <h1 className="featuresTitle">Featured Hotels and Designs</h1>

      <div className="featuredSection">
        <h2>Top Hotels</h2>
        <div className="featuredHotels">
          {/* Hotel 1 */}
          <div className="hotelCard">
            <img src={h1} alt="Hotel 1" className="hotelImage" />
            <div className="hotelDetails">
              <h3>Hotel Paradise</h3>
              <p>Located in the heart of the city, Hotel Paradise offers luxury and comfort.</p>
              <a href="/home" className="hotelLink">View Details</a>
            </div>
          </div>

          {/* Hotel 2 */}
          <div className="hotelCard">
            <img src={h2} alt="Hotel 2" className="hotelImage" />
            <div className="hotelDetails">
              <h3>Seaside Resort</h3>
              <p>Enjoy breathtaking views and pristine beaches at Seaside Resort.</p>
              <a href="/home" className="hotelLink">View Details</a>
            </div>
          </div>

          {/* Hotel 3 */}
          <div className="hotelCard">
            <img src={h3} alt="Hotel 3" className="hotelImage" />
            <div className="hotelDetails">
              <h3>Mountain Retreat</h3>
              <p>Escape to the mountains for a relaxing retreat in nature's embrace.</p>
              <a href="/home" className="hotelLink">View Details</a>
            </div>
          </div>
        </div>
      </div>

      <div className="designSection">
        <h2>Hotel Designs</h2>
        <div className="designGallery">
          <div className="designCard">
            <img src={d1} alt="Design 1" className="designImage" />
            <p className="designDescription">Contemporary Elegance: A modern take on luxury hotel design.</p>
          </div>

          <div className="designCard">
            <img src={d2} alt="Design 2" className="designImage" />
            <p className="designDescription">Sustainable Architecture: Eco-friendly designs for the future.</p>
          </div>

          <div className="designCard">
            <img src={d3} alt="Design 3" className="designImage" />
            <p className="designDescription">Art Deco Revival: Bringing vintage charm to modern hotels.</p>
          </div>
        </div>
      </div>

      <div className="contentSection">
        <h2>Explore More</h2>
        <p>
          Discover a wide variety of hotels and designs to find the perfect match for your next stay.
          Our featured hotels offer the best in luxury, comfort, and style.
        </p>
        <a href="/home" className="exploreLink">Explore More Hotels</a>
      </div>
    </div>
  );
};

export default FeaturesPage;

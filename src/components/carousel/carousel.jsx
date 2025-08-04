import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./carousel.css";
import cimg1 from "../../assets/hotelmain.jpg"
import cimg2 from "../../assets/hotelimg4.jpg"
import cimg3 from "../../assets/hotelimg3.jpg"



const Carousel = () => {
  return (
    <div className="carouselContainer">
      <div
        id="hotelCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={cimg1}
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>LUXURIOUS DINNIG</h5>
              <p>Savor gourmet flavors in an atmosphere of refined elegance.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cimg2}
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>MAGNIFICENT VIEWS</h5>
              <p>Soak in breathtaking vistas from every corner of your stay.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={cimg3}
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>ELEGANT ROOMS</h5>
              <p>Unwind in style with comfort woven into every detail.</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hotelCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hotelCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

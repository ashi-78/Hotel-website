import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import "./hotelLanding.css";
import img1 from "../../assets/hotelimg2.jpg"
import img2 from "../../assets/hotelimg8.jpg"


const HotelLanding = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Enhanced image array with 6 high-quality images
  const slides = [
{ 
  image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
      title: "INFINITY POOL",
      subtitle: "Relax in our stunning pool with panoramic views"
    },
    {
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
      title: "PRIVATE BEACH",
      subtitle: "Exclusive access to pristine white sand beaches"
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
      title: "LUXURY SUITES",
      subtitle: "Experience unparalleled comfort in our premium accommodations"
    },
    {
      image: img2,
      title: "OCEAN VIEW ROOMS",
      subtitle: "Wake up to breathtaking views of the coastline"
    },
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80",
      title: "GOURMET DINING",
      subtitle: "Savor world-class cuisine prepared by our master chefs"
    },
    {
      image: img1,
      title: "SPA RETREAT",
      subtitle: "Rejuvenate your senses with our signature treatments"
    }
    
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goToSlide = useCallback((index) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500); // Increased transition duration
  }, [currentSlide, isTransitioning]);

  // Auto-rotate slides with slower transition
  useEffect(() => {
    let interval;
    const heroElement = document.querySelector('.hero');
    
    const startInterval = () => {
      interval = setInterval(() => {
        goToSlide((prev) => (prev + 1) % slides.length);
      }, 7000); // Slower rotation (7 seconds)
    };
    
    const pauseInterval = () => {
      clearInterval(interval);
    };
    
    startInterval();
    heroElement.addEventListener('mouseenter', pauseInterval);
    heroElement.addEventListener('mouseleave', startInterval);
    
    return () => {
      clearInterval(interval);
      heroElement.removeEventListener('mouseenter', pauseInterval);
      heroElement.removeEventListener('mouseleave', startInterval);
    };
  }, [goToSlide, slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hotelLanding">
      <div className="hero">
        {/* Background slides with slower transition */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide-bg ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        
        <nav className={`navbarr ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">Elysian Escapes</div>
          
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? "line1" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "line2" : ""}`}></div>
            <div className={`line ${isMenuOpen ? "line3" : ""}`}></div>
          </div>

          <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/featurespage")}>Rooms</li>
            <li onClick={() => navigate("/featurespage")}>Amenities</li>
            <li onClick={() => navigate("/featurespage")}>Gallery</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
            
            <li>
              <button className="bookBtn" onClick={handleLoginClick}>
                Book Now
              </button>
            </li>
          </ul>
        </nav>

        <div className="overlay">
          <div className="slide-content">
            <h1 className="slide-title">{slides[currentSlide].title}</h1>
            <p className="slide-subtitle">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="auth-buttons">
            <button className="loginBtn" onClick={handleLoginClick}>
              <span>Login</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
            <button className="registerBtn" onClick={handleRegisterClick}>
              <span>Register</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="carousel-nav prev" 
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          className="carousel-nav next" 
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HotelLanding;
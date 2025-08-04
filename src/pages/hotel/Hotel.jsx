import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faDollarSign,
  faFontAwesome,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  };
  useEffect(() => {
    window.scrollTo(0, 0);          
  }, []);
  let days = 0;
  if (dates?.length && dates[0].startDate && dates[0].endDate) {
    days = dayDifference(dates[0].endDate, dates[0].startDate);
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const mainPhoto = data?.photos?.[0];

  return (
    <div className="hotelPage">
      <Navbar />
      

      {loading ? (
        <div className="loadingSpinner">Loading...</div>
      ) : error ? (
        <div>Error loading hotel data.</div>
      ) : (
        <div className="hotelContainer">
        {open && (
  <div className="slider">
    <FontAwesomeIcon
      icon={faCircleXmark}
      className="close"
      onClick={() => setOpen(false)}
    />

    <FontAwesomeIcon
      icon={faCircleArrowLeft}
      className="arrow left"
      onClick={() => handleMove("l")}
    />

    <div className="sliderWrapper">
      <img
        src={data.photos[slideNumber]}
        alt={`Slide ${slideNumber + 1}`}
        className="sliderImg"
      />
    </div>

    <FontAwesomeIcon
      icon={faCircleArrowRight}
      className="arrow right"
      onClick={() => handleMove("r")}
    />
  </div>
)}


          <div className="hotelWrapper">
            <div className="hotelImageContainer">
              <img
                
                src={mainPhoto}
                alt="Hotel main"
                className="hotelBackgroundImg"
              />
              <div className="hotelDetailsOverlay">
                <h1 className="hotelTitle">
                  <FontAwesomeIcon icon={faLocationDot} className="titleIcon" />
                  {data.name}
                </h1>
                <h2 className="hotelTitle1">{data.title}</h2>
                <p className="hotelDesc">{data.desc}</p>
              </div>
            </div>

           
              <button className="bookNow" onClick={handleClick}>
                Reserve or Book Now!
              </button>
           

            <div className="hotelContentWrapper">
              <div className="hotelExtraImagesSection">
                <div className="imageBlockRight">
                  <img
                    src={data.photos?.[1]}
                    alt="Hotel side"
                    className="sideImage"
                  />
                  <div className="content1">{data.aboutrooms}</div>
                </div>

                <div className="imageBlockLeft">
                  <div className="titleoffood">rooms and dinnings</div>
                  <div className="moreimage">
                      <div class="moreimageTrack">
                    {[2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7].map((i, index) => (
                      <img
                       onClick={() => handleOpen(0)}
                        key={index}
                        src={data.photos?.[i]}
                        alt={`Hotel ${i}`}
                        className="otherImage"
                      />
                    ))}
                  </div>
                  </div> 

                   
                  <div className="content2">{data.aboutarea}</div>
                </div>

                <div className="otherdetails">
                  <span className="locationtitle">LOCATION AND CONTACT</span>
                  <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{data.address}</span>
                  </div>
                  <span className="hotelDistance">
                    <FontAwesomeIcon icon={faFontAwesome} />
                    <span>{data.distance}m </span>
                    Excellent location from center
                  </span>
                  <span className="hotelPriceHighlight">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span>
                      Book a stay over ${data.cheapestPrice} at this property and
                      get a free airport taxi
                    </span>
                  </span>
                </div>

                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
              </div>
                <MailList />
            </div>

          
            <Footer />
          </div>
        </div>
      )}

      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;

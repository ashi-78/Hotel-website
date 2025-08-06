import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./propertyList.css";


// ✅ Local images
import a from "../../assets/h5.webp";
import c from "../../assets/c.webp";
import r from "../../assets/r.avif";
import v from "../../assets/v.avif";
import t from "../../assets/h3.avif";
 const BASE_URL = "https://hotel-backend-gzn1.onrender.com/api";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const [showSimilar, setShowSimilar] = useState(false);
  const [similarHotels, setSimilarHotels] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const navigate = useNavigate();

  const images = [a, c, r, v, t]; // 🖼️ Local image references

  const handlePropertyClick = (type) => {
    setSelectedType(type);
    fetch(`${BASE_URL}/hotels?type=${type}`)
      .then((res) => res.json())
      .then((hotels) => {
        setSimilarHotels(hotels);
        setShowSimilar(true);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  const handleHotelClick = (id) => {
    navigate(`/hotels/${id}`);
  };

  return (
    <div className="pListWrapper">
      <div className="pListTitle">Browse by Property Type</div>

      <div className="pList">
        {loading
          ? "Loading..."
          : data &&
            images.map((img, i) => (
              <div
                className="pListItem"
                key={i}
                onClick={() => handlePropertyClick(data[i]?.type)}
              >
                <div className="hexagon">
                  <img src={img} alt={data[i]?.type} className="pListImg" />
                </div>
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
      </div>

      {error && <div>Error: {error}</div>}

      {showSimilar && (
        <div className="similarHotelsSection">
          <h3>Similar {selectedType} properties</h3>
          <div className="similarHotelsGrid">
            {similarHotels.length > 0 ? (
              similarHotels.map((hotel) => (
                <div
                  key={hotel._id}
                  className="similarHotelCard"
                  onClick={() => handleHotelClick(hotel._id)}
                >
                  <img
                    src={hotel.photos?.[0] || images[0]}
                    alt={hotel.name}
                    className="similarHotelImage"
                  />
                  <div className="similarHotelInfo">
                    <h4>{hotel.name}</h4>
                    <p>{hotel.city}</p>
                    <div className="similarHotelPrice">
                      Starting from ${hotel.cheapestPrice}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No similar properties found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyList;

import useFetch from "../../hooks/useFetchTemp";
import "./FeaturedProperties.css";
import a from "../../assets/a.avif";
import c from "../../assets/c.webp";
import r from "../../assets/r.avif";
import v from "../../assets/v.avif";
import t from "../../assets/h3.avif";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=10");

  console.log("FeaturedProperties", data);

  const fallbackImages = [
    "https://578ae522.delivery.rocketcdn.me/wp-content/uploads/2024/11/V2_GatewayTaproom.jpg",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",

  ];

  return (
    <div className="fp">
      <div className="fpTrack">
        {loading ? (
          "Loading"
        ) : (
          <>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => {
                const photosToShow =
                  item.photos && item.photos.length > 0
                    ? item.photos
                    : [fallbackImages[index % fallbackImages.length]];

                return (
                  <div className="fpItem" key={item._id}>
                    <div className="fpImages">
                      {photosToShow.map((photo, i) => (
                        <img
                          key={i}
                          src={photo}
                          alt={`${item.name} ${i + 1}`}
                          className="fpImg"
                        />
                      ))}
                      <div className="fpOverlayText">
                        <div className="fpName">{item.name}</div>
                        <div className="fpCity">{item.city}</div>
                        <div className="fpPrice">Starting from ${item.cheapestPrice}</div>
                      </div>
                    </div>
                    {item.rating && (
                      <div className="fpRating">
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p>No featured properties found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;

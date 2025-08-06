import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./reserve.css";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(
    `https://hotel-backend-gzn1.onrender.com/api/hotels/room/${hotelId}`
  );
  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    if (!startDate || !endDate) {
      console.warn("Invalid startDate or endDate:", startDate, endDate);
      return [];
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    const datesInRange = [];

    while (date <= end) {
      datesInRange.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return datesInRange;
  };

  const alldates =
    dates?.[0]?.startDate && dates?.[0]?.endDate
      ? getDatesInRange(dates[0].startDate, dates[0].endDate)
      : [];

  const isAvailable = (roomNumber) => {
    if (!roomNumber?.unavailableDates) return false;
    return !roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          return axios.put(
            `https://hotel-backend-gzn1.onrender.com/api/rooms/availability/${roomId}`,
            {
              dates: alldates,
            }
          );
        })
      );
      setOpen(false);
      navigate("/booked");
    } catch (err) {
      console.error("Reservation failed:", err);
    }
  };

  // Add proper error handling
  if (error) {
    return <div className="reserve">Error loading rooms: {error.message}</div>;
  }

  // Handle case where data is null or not an array
  if (!Array.isArray(data)) {
    return <div className="reserve">No room data available</div>;
  }

  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {loading ? (
          <p>Loading rooms...</p>
        ) : (
          data.map((item) => (
            <div className="rItem" key={item?._id || Math.random()}>
              <div className="rItemInfo">
                <div className="rTitle">{item?.title || "Untitled Room"}</div>
                <div className="rDesc">{item?.desc || "No description"}</div>
                <div className="rMax">
                  Max people: <b>{item?.maxPeople || "N/A"}</b>
                </div>
                <div className="rPrice">{item?.price || "Price not set"}</div>
              </div>
              <div className="rSelectRooms">
                {Array.isArray(item?.roomNumbers) &&
                  item.roomNumbers.map((roomNumber) => (
                    <div
                      className="room"
                      key={roomNumber?._id || Math.random()}
                    >
                      <label>{roomNumber?.number || "N/A"}</label>
                      <input
                        type="checkbox"
                        value={roomNumber?._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))
        )}
        <button
          onClick={handleClick}
          className="rButton"
          disabled={selectedRooms.length === 0}
        >
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;

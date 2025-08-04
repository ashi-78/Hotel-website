import useFetch from "../../hooks/useFetch";
import "./featured.css";

import h1 from "../../assets/h14.avif";
import h2 from "../../assets/h8.avif";
import h3 from "../../assets/h15.avif";
import h4 from "../../assets/h4.webp";
import h5 from "../../assets/hindia.avif";
import h6 from "../../assets/h11.avif";
import h7 from "../../assets/h16.avif";
import h8 from "../../assets/h2.avif";
import h9 from "../../assets/h9.avif";
import h10 from "../../assets/h12.avif";
import h11 from "../../assets/h6.webp";
import h12 from "../../assets/h10.avif";
import h13 from "../../assets/h3.avif";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "api/hotels/countByCity?cities=Berlin,Madrid,London,New York,Noida,Dubai,Paris,Tokyo,Lucknow,Rome,Bangkok,Vienna,Miami"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={h1} alt="Berlin" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Berlin, GERMANY</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h2} alt="Madrid" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Madrid, SPAIN</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h3} alt="London" className="featuredImg" />
            <div className="featuredTitles">
              <h1>London, UK</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h4} alt="New York" className="featuredImg" />
            <div className="featuredTitles">
              <h1>New York City, USA</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h5} alt="Noida" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Noida, INDIA</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h6} alt="Dubai" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Dubai, UAE</h1>
              <h2>{data[5]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h7} alt="Paris" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Paris, France</h1>
              <h2>{data[6]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h8} alt="Tokyo" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Tokyo, Japan</h1>
              <h2>{data[7]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h9} alt="Lucknow" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Lucknow, INDIA</h1>
              <h2>{data[8]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h10} alt="Rome" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Rome, Italy</h1>
              <h2>{data[9]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h11} alt="Bangkok" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Bangkok, Thailand</h1>
              <h2>{data[10]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h12} alt="Vienna" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Vienna, Austria</h1>
              <h2>{data[11]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={h13} alt="Miami" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Miami, USA</h1>
              <h2>{data[12]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

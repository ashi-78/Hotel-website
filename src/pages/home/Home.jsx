import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Carousel from "../../components/carousel/Carousel"; // import carousel
import "./home.css";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Featured from "../../components/featured/featured";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Carousel added below header */}
      <Carousel />
      <Header />

      

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

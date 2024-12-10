import Nav from "./Components/Nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Charousel from "./Components/carousel.js"
import Footer from "./Footer.js";
import Testimonial from "./Testimonal.js";
import Header from './Components/Header.jsx'
import LeadingCategories from "./Components/LeadingCategories.jsx";
import Banner from "./Components/Banner.jsx";
import Register from "./Components/Register.jsx";


function Front() {
    return (
      <div className="front">
        {/* Header Section */}
          <Nav />
          <Header />

        {/* Leading Categories */}
          <LeadingCategories />
        {/* Banner */}
          <Banner />
        {/* Trending Products */}
        <section className="trending-products">
          <h2>Top Trending Products</h2>
          <Charousel />
        </section>
        {/* Register Section */}
          <Register />

        <section className="another">
          <Charousel />
          <Banner />
          {/* Customer Testimonials */}
          <Testimonial />
        </section>


        <Footer />
      </div>
    );
  }
  
  export default Front;
  

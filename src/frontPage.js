import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Carousel from 'react-bootstrap/Carousel';
import Charousel from "./Components/carousel.js"
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Textcarousel from "./Components/Textcarousel.js";
import Footer from "./Footer.js";
import Testimonial from "./Testimonal.js";
import { GrLicense } from "react-icons/gr";

// import MyText from "./Components/Mytext.js";


function Front() {
    return (
      <div className="front">
        {/* Header Section */}
        <header className="header">
        <Nav />
        <div className="header-content">
          <div className="title">
            <h1>Find, evaluate, and choose the perfect software for your business needs</h1>
          </div>
          <div className="container">
            <form action="" className="search-bar">
              <input type="text" name="q" placeholder="Search by Category" />
              <button type="submit" aria-label="Search">
                {/* <img src="..\frontend\src\Images\WhatsApp Image 2024-12-07 at 22.06.46_ab09f4fb.jpg" alt="Search"  /> */}
              </button>
            </form>
          </div>
          <div className="header-buttons">
            <button><FaPhoneVolume /> Free Expert Consultation</button>
            <button><GrLicense />  Get Instant License</button>
            <button><MdOutlineAddShoppingCart /> Easy & Secure Checkout</button>
          </div>
        </div>
      </header>

      {/* Leading Categories */}
      <section className="categories">
        <h2>Leading Categories</h2>
        <div className="categories-slider">
          {/* {["Software", "Business Tools", "AI & Machine Learning", "CRM Solutions", "More..."].map((category, index) => (
            <div key={index} className="category-item">
              {category}
            </div>
          ))} */}
          <Textcarousel />
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
      <div className="mask">
          <div className="color-mask"></div>
        </div> {/* Mask for banner */}
        <Carousel className="sliding">
          <Carousel.Item>
            <img
              src="https://img.freepik.com/free-photo/technology-bokeh-background-with-particle-lines_53876-104786.jpg?semt=ais_hybrid"
              alt="Technology background"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/premium-photo/blue-futuristic-3d-sphere_202284-69.jpg?semt=ais_hybrid"
              alt="Futuristic 3D sphere"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://img.freepik.com/premium-vector/sci-fi-tech-cyber-futuristic-design-concept-background_71775-218.jpg?semt=ais_hybrid"
              alt="Sci-fi tech background"
            />
          </Carousel.Item>
        </Carousel>
      </section>



      {/* Trending Products */}
      <section className="trending-products">
        <h2>Top Trending Products</h2>
        {/* <div className="products-grid">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="product-item">
              <img src="https://via.placeholder.com/150" alt="Product" />
              <h3>Cisco</h3>
              <p>Product Details</p>
            </div>
          ))}
        </div> */}
        <Charousel />
        {/* <div className="carousel">
            <div className="products-grid box">
            {Array(6).fill(0).map((_, index) => (
                <div key={index} className="product-item">
                <img src="https://via.placeholder.com/150" alt="Product" />
                <h3>Cisco</h3>
                <p>Product Details</p>
                </div>
            ))}
            </div>
        </div> */}
        

      </section>

      {/* Register Section */}
      <section className="register">
        <div className="left-part">
          <img src="https://tse4.mm.bing.net/th?id=OIP.MMsYZP7G5DqKd6Pa0IyU2QHaFD&pid=Api&P=0&h=180" />
        </div>
        <div className="register-content">
          <h2>Register</h2>
          <p>
            Join many organizations choosing TechWorld to transform their
            operations with professional tools. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero ac risus malesuada lacinia. Vestibulum eget venenatis purus. Fusce vitae nisi nec purus tincidunt euismod. Vivamus dapibus, risus at tincidunt tincidunt, elit lorem placerat odio, nec viverra odio sapien in nulla. Integer euismod metus sit amet nisi.

          </p>
          <button>Learn More</button>
        </div>
      </section>


      <section className="another">
      <Charousel />


      <section className="banner">
        {/* <div className="banner-content"> */}
        <div className="mask">
          <div className="color-mask"></div>
        </div>
        <Carousel  className="sliding">
            <Carousel.Item>
                <img
                // className="d-block w-100"
                src="https://img.freepik.com/free-photo/technology-bokeh-background-with-particle-lines_53876-104786.jpg?semt=ais_hybrid"
            
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                // className="d-block w-100"
                src="https://img.freepik.com/premium-photo/blue-futuristic-3d-sphere_202284-69.jpg?semt=ais_hybrid"
                
                />
                </Carousel.Item>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src="https://img.freepik.com/premium-vector/sci-fi-tech-cyber-futuristic-design-concept-background_71775-218.jpg?semt=ais_hybrid"
        />
      </Carousel.Item>
    </Carousel>
          
        {/* </div> */}
      </section>
      

      {/* Customer Testimonials */}
      {/* <section className="testimonials">
        <h2>What our Customers Say</h2>
        <div className="testimonial">
          <p>
            "TechCloud is simply awesome! Their team is incredibly supportive
            and professional."
          </p>
          <div className="customer-info">
            <img src="https://via.placeholder.com/50" alt="Customer" />
            <p>James Thomas</p>
            <span>Official</span>
          </div>
        </div>
      </section> */}
      <Testimonial />
      </section>
      <Footer />
      </div>
    );
  }
  
  export default Front;
  
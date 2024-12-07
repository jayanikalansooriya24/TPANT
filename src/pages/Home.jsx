import React from "react";
import "../styles/Home.css";
import plantImage from "../assets/a.png"; // Replace with actual image path
import m from "../assets/m.png"; // Replace with actual image path
import a from "../assets/a.png"; // Replace with actual image path
import b from "../assets/b.png"; // Replace with actual image path
import search from "../assets/search.png"; // Replace with actual image path
import cart from "../assets/cart.png"; // Replace with actual image path
import user from "../assets/user.png"; // Replace with actual image path
import z from "../assets/z.png"; // Replace with actual image path
import play from "../assets/play.png"; // Replace with actual image path
import h from "../assets/h.png"; // Replace with actual image path
import i from "../assets/i.png"; // Replace with actual image path
import g from "../assets/g.png"; // Replace with actual image path
import f from "../assets/f.png"; // Replace with actual image path
import c from "../assets/c.png"; // Replace with actual image path
import d from "../assets/d.png"; // Replace with actual image path
import e from "../assets/e.png"; // Replace with actual image path
import j from "../assets/j.jpg"; // Replace with actual image path
import sagoPalm from "../assets/a.png"; // Replace with actual image path
import neon from "../assets/b.png"; // Replace with actual image path
import calathea from "../assets/g.png"; // Replace with actual image path
import treePlantingImage from "../assets/e.png"; // Replace with actual image path
import galleryImage1 from "../assets/00.png"; // Replace with actual image path
import galleryImage2 from "../assets/01.png"; // Replace with actual image path
import galleryImage3 from "../assets/02.png"; // Replace with actual image path
import galleryImage4 from "../assets/03.jpg"; // Replace with actual image path
import galleryImage5 from "../assets/04.jpg"; // Replace with actual image path
import galleryImage6 from "../assets/06.png"; // Replace with actual image path
import galleryImage8 from "../assets/08.jpg"; // Replace with actual image path
import galleryImage9 from "../assets/9.jpg"; // Replace with actual image path
import galleryImage10 from "../assets/10.jpg"; // Replace with actual image path
import galleryImage11 from "../assets/11.webp"; // Replace with actual image path  
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure


function Home() {
  return (
    <div className="page-wrapper">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="TPLANT Logo" />
        </div>

        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <div className="header-icons">
          <img src={search} alt="Reveal the Plant" />
          <img src={cart} alt="Reveal the Plant" />
          <img src={user} alt="Reveal the Plant" />
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            PLANT TREE CREATE A <span className="highlight">GREEN FUTURE</span>
          </h1>
          <p>
            Trees absorb carbon dioxide, a greenhouse gas that contributes to
            climate change, and release oxygen, which we need for every breath.
          </p>
          <div className="hero-actions">
            <button className="btn">Buy Now</button>
            <div className="play-button">
              <img src={play} alt="play" />
              <span>How to care for plants</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={f} alt="Plant" />
          <div className="hero-info">
            <div className="info-item">
              <i className="fas fa-sun"></i>
              <span>Daylight: 6 hrs or more</span>
            </div>
            <div className="info-item">
              <i className="fas fa-tint"></i>
              <span>Watering: 2x / week</span>
            </div>
            <div className="info-item">
              <i className="fas fa-cloud-sun"></i>
              <span>Weather: 75°F / 24°C</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Product Section */}
      <section className="recent-products">
        <h2>Recent Product</h2>
        <div className="recent-products-container">
          <div className="product-card">
            <img src={z} alt="Toss the Tubes" />
            <div className="product-content">
              <h3>Toss the Tubes</h3>
              <p>Recycle the tubes. Let’s make our community greener.</p>
            </div>
          </div>
          <div className="product-card">
            <img src={m} alt="Reveal the Plant" />
            <div className="product-content">
              <h3>Reveal the Plant</h3>
              <p>Plant a seed to nurture and grow green spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* Our Best Products Section */}
      <section className="best-products">
        <h2>All Items</h2>
        <h2>Our Best Products</h2>
        <br />
        <br />
        <div className="product-grid">
          {[
            { name: "Dracaena", price: "$80.00", image: b, rating: "★★★★☆" },
            { name: "Snake Plant", price: "$70.00", image: a, rating: "★★★★★" },
            { name: "Peace Lily", price: "$65.00", image: i, rating: "★★★★☆" },
            { name: "Money Plant", price: "$90.00", image: g, rating: "★★★★★" },
            { name: "Aloe Vera", price: "$50.00", image: j, rating: "★★★★☆" },
            { name: "Areca Palm", price: "$100.00", image: c, rating: "★★★★★" },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <span>{product.rating}</span>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Products Section */}
      <div className="trending-products-wrapper">
        <h2 className="section-title">Trending Product</h2>
        <div className="product-categories">
          <span>Indoor plants</span>
          <span>Outdoor plants</span>
          <span>Wall plants</span>
          <span>Ceiling plants</span>
          <span>Pots</span>
          <span>Vases</span>
        </div>
        <div className="trending-products">
          <div className="product-card">
            <img src={sagoPalm} alt="Sago Palm" />
            <div className="product-info">
              <h3>SAGO PALM</h3>
              <p>Imported Plant Products</p>
              <span>★★★★★</span>
            </div>
          </div>
          <div className="product-card">
            <img src={neon} alt="Neon" />
            <div className="product-info">
              <h3>NEON</h3>
              <p>Imported Plant Products</p>
              <span>★★★★☆</span>
            </div>
          </div>
          <div className="product-card">
            <img src={calathea} alt="Calathea" />
            <div className="product-info">
              <h3>CALATHEA</h3>
              <p>Imported Plant Products</p>
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="about-content">
          <h2>About</h2>
          <h3>WE PRIORITIZE YOUR SIGNIFICANT MOMENTS</h3>
          <p>
            Plants are proven to add a touch of serenity to your space and
            positively impact your mood. We help you nurture your green moments
            with care and commitment.
          </p>
          <div className="about-buttons">
            <button className="btn-primary">Learn More</button>
            <button className="btn-secondary">Buy Now</button>
          </div>
        </div>
        <div className="about-image">
          <img src={treePlantingImage} alt="Tree Planting" />
        </div>
      </section>
      <section className="gallery-section">
        <h2 className="section-title">Gallery</h2>
        <h3 className="gallery-title">OUR GALLERY</h3>
        <div className="gallery-grid">
          <img src={galleryImage8} alt="Gallery 3" className="gallery-item" />
          <img src={galleryImage1} alt="Gallery 1" className="gallery-item" />
          <img src={galleryImage2} alt="Gallery 2" className="gallery-item" />
          <img src={galleryImage10} alt="Gallery 3" className="gallery-item" />
          <img src={galleryImage11} alt="Gallery 4" className="gallery-item" />
          <img src={galleryImage5} alt="Gallery 5" className="gallery-item" />
          <img src={galleryImage9} alt="Gallery 6" className="gallery-item" />
          <img src={galleryImage6} alt="Gallery 7" className="gallery-item" />

        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content">
          {/* Newsletter Signup */}
          <div className="newsletter">
            <h3>STAY TUNED FOR MORE UPDATES</h3>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="footer-column">
              <h4>Home</h4>
              <ul>
                <li>Why Choose Us</li>
                <li>Our Gallery</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Event</h4>
              <ul>
                <li>New Arrivals</li>
                <li>Past Events</li>
                <li>Upcoming Events</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Social Media</h4>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          {/* Footer Brand Section */}
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="TPLANT Logo" />
            </div>

            <p>
              Let’s help you find time by having plants that effortlessly decorate
              spaces and thrive with minimal care.
            </p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;

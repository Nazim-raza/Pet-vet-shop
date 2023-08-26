import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <div>
      <div>
        {/* home */}
        <section className="home" id="home">
          <div className="content">
            <h3>
              <br />
              We treat pets
              <br /> like family
            </h3>
            <a href="/login" className="btn">
              Join Us
            </a>
          </div>
          <img src="images/bottom_wave.png" alt className="wave" />
        </section>
        {/* end */}

        {/* gallery */}
        <section className="gallery" id="gallery">
          <h2 className="heading">gallery</h2>
          <div className="swiper gallery-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/gallery-1.jpg" alt />
                </div>
              </div>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/gallery-2.jpg" alt />
                </div>
              </div>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/gallery-3.jpg" alt />
                </div>
              </div>
              <div className="swiper-slide slide">
                <div className="image">
                  <img src="images/gallery-4.jpg" alt />
                </div>
              </div>
            </div>
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </section>
        {/* end */}
        {/* animals */}
        <section className="animal" id="animal">
          <h2 className="heading">Services</h2>
          <div className="box-container">
            <div className="box">
              <img src="images/animal_1.jpg" alt />
              <div className="content">
                <h3>Routine Care</h3>
                <a href="#" className="btn">
                  see datails
                </a>
              </div>
            </div>
            <div className="box">
              <img src="images/animals_2.jpg" alt />
              <div className="content">
                <h3>Vaccination</h3>
                <a href="#" className="btn">
                  see datails
                </a>
              </div>
            </div>
            <div className="box">
              <img src="images/animals_3.jpg" alt />
              <div className="content">
                <h3>Ear, Skin, Eye</h3>
                <a href="#" className="btn">
                  see datails
                </a>
              </div>
            </div>
            <div className="box">
              <img src="images/animals_4.jpg" alt />
              <div className="content">
                <h3>Physical Checkup</h3>
                <a href="#" className="btn">
                  see datails
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end */}
        {/* banner */}
        <section className="banner">
          <div className="row">
            <div className="content">
              <h3>stay with pets</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                doloremque rem reiciendis beatae, ut tempora. Et dolorem enim,
                iusto autem eaque harum. Ex praesentium commodi sequi culpa eius
                fugit vel.
              </p>
            </div>
            <div className="image">
              <img src="images/banner_1.png" alt />
            </div>
          </div>
        </section>
        {/* end */}
        {/* contact */}
        <section className="contact" id="contact">
          <h2 className="heading">contact</h2>
          <form action>
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              name
              id
              cols={30}
              rows={10}
              placeholder="meassage"
              defaultValue={""}
            />
            <a href="#" className="btn">
              send message
            </a>
          </form>
        </section>
        {/* end */}
        {/* footer */}
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>newsletter</h3>
              <p>subscribe for latest updates</p>
              <input type="email" placeholder="Your Email" className="email" />
              <a href="#" className="btn">
                subscribe
              </a>
              <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-linkedin" />
              </div>
            </div>
          </div>
          <div className="credit">
            © 2023 Petvet. All rights reserved by{" "}
            <a href="#" className="link">
              Nazim-Raza
            </a>
          </div>
        </section>
        {/* end */}
      </div>
    </div>
  );
};

export default Home;

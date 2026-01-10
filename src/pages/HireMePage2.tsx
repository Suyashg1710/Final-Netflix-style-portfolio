import React, { useState } from "react";
import Slider from "react-slick";
import PlayButton from "../components/PlayButton";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HireMePage2.css";

const HireMePage: React.FC = () => {
const [, setCurrentSlide] = useState<number>(0);


  // Your photos for the slider - UPDATE THESE PATHS
  const photos = [
    "/your-photo-1.jpg",
    "/your-photo-2.jpg",
    "/your-photo-3.jpg",
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  return (
    <div className="hire-me-page">
      {/* Main Content Section */}
      <div className="hire-me-content">
        {/* Left: Description */}
        <div className="hire-description">
          <h1>Suyash Gupta</h1>

          <div className="about-text">
            <p className="bio-headline">
              Professional Copywriter. Aspiring Creative Director. Part-time
              Overthinker.
            </p>
            <p className="bio-highlight">
              I usually open up 'better' after a beer. Or two.
            </p>

            <p>
              When I'm not writing or overthinking ideas, you'll probably find
              me somewhere between an early evening and a late conversation
              about music, movies, shows, or documentaries. On any random day, I
              might ask if you know the 'Joker–Batman being brothers' theory or
              why Syd actually left Pink Floyd. And no, this isn't reserved for
              weekends only.
            </p>

            <p>
              After 2 years at Miami Ad School Europe and 4+ years of writing
              for brands like BMW, Mercedes-Benz, Kinder, La Roche-Posay,
              Perwoll, Pepsi, and many more, you'd think writing my own bio
              would be easy for me. It's not.
            </p>

            <p>
              Chances are, you'll find this section updated on your next visit.
              And the next. And the next...
            </p>

            <p>
              So if you really want to know me better, just{" "}
              <a href="tel:+491781332944" className="bio-link">
                call
              </a>
              . Or{" "}
              <a href="mailto:suyashg1710@gmail.com" className="bio-link">
                write
              </a>
              .
            </p>
          </div>

          {/* Resume Button */}
          <div className="resume-button-container">
            <PlayButton
              onClick={() => window.open("YOUR_RESUME_LINK_HERE", "_blank")}
              label="Resume"
            />
          </div>
        </div>

        {/* Right: Photo Slider */}
        <div className="hire-slider">
          <Slider {...sliderSettings}>
            {photos.map((photo, index) => (
              <div key={index} className="slide">
<img src={photo} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Looks like an ideal candidate? Let's talk.</h2>
        <p className="contact-subtitle">
          Choose your preferred way to reach out
        </p>

        <div className="contact-tiles">
          <a
            href="https://instagram.com/suyashg"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile instagram"
            title="Instagram"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/suyashg17/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-tile linkedin"
            title="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:suyashg1710@gmail.com"
            className="contact-tile email"
            title="Email"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="tel:+491781332944"
            className="contact-tile phone"
            title="Phone"
          >
            <FaPhone />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HireMePage;

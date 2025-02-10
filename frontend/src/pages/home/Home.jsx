// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./home.css";
// import Testimonials from "../../components/testimonials/Testimonials";

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="home">
//         <div className="home-content">
//           <h1>Welcome to our Gym</h1>
//           <p>By Tridev Pandey</p>
//           <button onClick={() => navigate("/courses")} className="common-btn">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <Testimonials />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gym_background_1 from "../../assets/backgroundimagesherosection/gymframe40.svg";
import gym_background_2 from "../../assets/backgroundimagesherosection/72b8fd170eb86b20bbfb832b3b2c9ea4.png";
import gym_background_3 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.png";
import gym_background_4 from "../../assets/backgroundimagesherosection/377995e55ae59d2d604a33248b4db519.png";
import clientImage from "../../assets/tridevpandey.png";
import "./home.css";

const bgImages = [gym_background_1, gym_background_2, gym_background_3, gym_background_4];

const Home = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        }, 3000); // Image change interval

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            {/* Background Image Slideshow */}
            {bgImages.map((img, index) => (
                <div
                    key={index}
                    className={`background-slide ${index === currentIndex ? "active" : ""}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}

            {/* Hero Section Content */}
            <div className="hero-content">
                <h1 className="hero-title">Tridev Pandey</h1>
                <p className="hero-description">
                    Lorem ipsum dolor sit amet consectetur. Faucibus elit vitae ut luctus. Odio molestie consequat molestie sit turpis tristique aliquet.
                </p>
                <button className="explore-btn" onClick={() => navigate("/about")}>Explore More</button>
            </div>

            {/* Image of Tridev Pandey */}
            <div className="profile-image" style={{ backgroundImage: `url(${clientImage})` }}></div>
        </div>
    );
};

export default Home;

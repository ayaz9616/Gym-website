// import React from "react";
// import "./footer.css";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillInstagram,
// } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-content">
//         <p>
//           &copy; 2024 Your Gym trainer. All rights reserved. <br /> Made
//           with ❤️ <a href="">Tridev Pandey</a>
//         </p>
//         <div className="social-links">
//           <a href="">
//             <AiFillFacebook />
//           </a>
//           <a href="">
//             <AiFillTwitterSquare />
//           </a>
//           <a href="https://www.instagram.com/niceandeasyfitness/">
//             <AiFillInstagram />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="top-links">
        <a href="https://www.instagram.com/">
          <AiFillInstagram /> Instagram
        </a>
        <a href="https://www.x.com/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/X_logo_2023.svg" alt="X" className="x-logo"/> x.com
        </a>
        <a href="https://www.facebook.com/">
          <AiFillFacebook /> Facebook
        </a>
        <a href="https://www.youtube.com/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_social_white_squircle_%282017%29.svg" alt="YouTube" className="youtube-logo"/> YouTube
        </a>
      </div>

      <div className="footer-content">
        <div className="left">
          <img src="https://via.placeholder.com/50" alt="Logo" className="logo"/>
          <h3>Nice & Easy</h3>
          <p>
            Hi! My name is Dmitrii Rogoza and I’m an expert in web design and branding. 
            I can help you make your website more attractive.
          </p>
          <p>Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815</p>
          <p>
            <AiOutlineMail /> <a href="mailto:support@figma.com">support@figma.com</a>
          </p>
          <p>📞 +1 800 854-36-80</p>
        </div>

        <div className="right">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

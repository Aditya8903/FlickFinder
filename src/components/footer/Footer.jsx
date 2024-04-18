import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Contact</li>{" "}
          {/* Added a Contact menu item */}
        </ul>
        <div className="infoText">
          <p>
            Find your next favorite film on FlickFinder! We are a comprehensive
            movie search engine that allows you to explore a vast library of
            films by title, genre, director, cast, and more. Discover hidden
            gems, revisit classics, and stay updated on the latest releases –
            all in one convenient place.
          </p>
          <p>
            Whether you are a movie buff or a casual cinephile, we empower you
            to make informed movie choices. Read reviews, watch trailers, and
            check out user ratings before you decide what to watch next. Happy
            exploring!
          </p>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

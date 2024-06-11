import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="content-container">
        <hr className="divider" />
        <div className="footer--content--container">
          <p className="footer--content">Made with 💖 by Arman</p>
          <div className="footer--social--icon">
            <ul className="p-0">
              <li>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Privacy_Policy"
                  className="text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Terms_of_Service"
                  className="text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

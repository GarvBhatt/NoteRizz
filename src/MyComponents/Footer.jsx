import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
  position: "relative",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "15px 0",
};

const Footer = () => (
  <footer
    className="page-footer font-small bg-dark text-white pt-4"
    style={footerStyle}
  >
    {/* Footer Content Section */}
    <div className="footer-wrapper bg-secondary py-4 container text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About NoteRizz</h5>
          <p>
            At NoteRizz, we are passionate about providing a platform where
            users can create and manage sticky notes to stay organized and
            productive. Additionally, you can set priority levels and expected
            completion dates for your notes to enhance your productivity.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        {/* Links Section */}
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Add Note
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                View Notes
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>{" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>{" "}
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="#!" className="text-white" rel="noopener noreferrer">
                <span style={{ paddingRight: "5px" }}>
                  <FontAwesomeIcon icon={faPinterest} />
                </span>{" "}
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} NoteRizz. All rights reserved. |{" "}
      <a href="https://noterizz.com/" className="text-white">
        NoteRizz.com
      </a>
    </div>
  </footer>
);

export default Footer;
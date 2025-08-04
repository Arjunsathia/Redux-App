import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section bg-light py-4">
      <div className="container">
        <div className="row gy-4">
          {/* About */}
          <div className="col-md-4">
            <h5 className="text-dark mb-3">Redux Cart</h5>
            <p className="text-muted small">
              Redux Cart is a simple and modern e-commerce platform to
              experience smooth product browsing, wishlist and cart management
              using React and Redux.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h5 className="text-dark mb-3 text-center">Quick Links</h5>
            <div className="d-flex flex-column align-items-center gap-2">
              <Link className="footer-link" to={"/"}>
                Home
              </Link>
              <Link className="footer-link" to={"/wish"}>
                Wishlist
              </Link>
              <Link className="footer-link" to={"/cart"}>
                Cart
              </Link>
            </div>
          </div>

          {/* Feedback */}
          <div className="col-md-4">
            <h5 className="text-dark mb-3">Feedback</h5>
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Your feedback..."
            ></textarea>
            <button className="btn btn-dark w-100">Send</button>
          </div>
        </div>

        <hr className="mt-4" />
        <p className="text-center text-muted small mb-0">
          &copy; {new Date().getFullYear()} Redux Cart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

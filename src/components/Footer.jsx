import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-light p-2">
        <div className="row">
          <div className="col">
            <h2 className="text-dark">Redux Cart </h2>
            <p className="text-dark" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, dolores aspernatur quam nam soluta provident magnam?
              Fugiat nesciunt voluptas ipsa eligendi, vero quasi at libero
              eveniet! Natus libero unde vel!
            </p>
          </div>
          <div className="col">
            <h2 className="text-dark text-center">Link</h2>
            <div className="d-flex justify-content-center align-items-center flex-column h-50">
              <Link className="text-primary" to={"/"}>
                Landing
              </Link>
              <Link className="text-primary" to={"/wish"}>
                Wishlist
              </Link>
              <Link className="text-primary" to={"/cart"}>
                Cart
              </Link>
            </div>
          </div>
          <div className="col">
            <h2 className="text-light">Feedbacks</h2>
            <textarea name="" id="" className="form-control my-3"></textarea>
            <button className="btn btn-secondary">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

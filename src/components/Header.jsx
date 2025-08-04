import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { search } from "../redux/slice/productSlice";

function Header() {
  const { wishList } = useSelector((state) => state.wishSlice);
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm px-4 py-3">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand>
          <Link to="/" className="brand-link d-flex align-items-center gap-2">
            <img
              src="https://toppng.com/uploads/preview/trolley-vector-grocery-cart-jpg-royalty-free-shopping-cart-vector-11562900803kma5vmgfao.png"
              width="40"
              height="40"
              alt="Cart Logo"
              className="brand-logo"
            />
            <h4 className="mb-0 fw-bold">Redux Cart</h4>
          </Link>
        </Navbar.Brand>

        <div className="search-box">
          <input
            type="search"
            placeholder="Search products..."
            className="form-control rounded-pill shadow-sm"
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </div>

        <div className="d-flex align-items-center gap-4">
          {/* Wishlist */}
          <div className="position-relative">
            <Link
              to="/wish"
              className="btn btn-outline-danger rounded-pill px-4"
            >
              <i className="fa-solid fa-heart me-2"></i>
              Wishlist
            </Link>
            {wishList.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
                style={{
                  fontSize: "0.75rem",
                  minWidth: "20px",
                  height: "20px",
                  lineHeight: "20px",
                  textAlign: "center",
                  padding: "0",
                  transform: "translate(-30%, -30%)",
                }}
              >
                {wishList.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="position-relative">
            <Link
              to="/cart"
              className="btn btn-outline-primary rounded-pill px-4"
            >
              <i className="fa-solid fa-cart-shopping me-2"></i>
              Cart
            </Link>
            {cart.length > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary"
                style={{
                  fontSize: "0.75rem",
                  minWidth: "20px",
                  height: "20px",
                  lineHeight: "20px",
                  textAlign: "center",
                  padding: "0",
                  transform: "translate(-30%, -30%)",
                }}
              >
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

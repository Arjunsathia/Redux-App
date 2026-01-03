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
        className="d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center"
      >
        <Navbar.Brand className="order-1">
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

        {/* Search Bar - Full width on mobile (order-3), centered on desktop (order-lg-2) */}
        <div className="search-box order-3 order-lg-2 w-100 w-lg-auto mt-3 mt-lg-0 flex-grow-1 mx-lg-5">
          <input
            type="search"
            placeholder="Search for products, brands and more..."
            className="form-control rounded-pill shadow-none"
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </div>

        {/* Icons - Right side on mobile (order-2), Right side on desktop (order-lg-3) */}
        <div className="d-flex align-items-center gap-3 gap-md-4 order-2 order-lg-3">
          {/* Wishlist */}
          <div className="position-relative">
            <Link
              to="/wish"
              className="btn btn-premium rounded-pill px-3 px-md-4 d-flex align-items-center danger-hover"
            >
              <i className="fa-regular fa-heart align-middle fs-5"></i>
              <span className="ms-2 d-none d-md-inline small text-uppercase fw-bold">Wishlist</span>
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
              className="btn btn-premium rounded-pill px-3 px-md-4 d-flex align-items-center"
            >
              <i className="fa-solid fa-bag-shopping align-middle fs-5"></i>
              <span className="ms-2 d-none d-md-inline small text-uppercase fw-bold">Cart</span>
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

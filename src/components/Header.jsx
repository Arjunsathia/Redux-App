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
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex justify-content-center align-items-center">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="d-flex align-items-center gap-2"
              >
                <img
                  alt="Cart Icon"
                  src="https://toppng.com/uploads/preview/trolley-vector-grocery-cart-jpg-royalty-free-shopping-cart-vector-11562900803kma5vmgfao.png"
                  width="35"
                  height="35"
                  className="d-inline-block align-middle"
                />
                <h4 className="m-0 text-dark">Redux Cart</h4>
              </Link>
            </div>
          </Navbar.Brand>
          <div>
            <input
              type="search"
              placeholder="Search by keyword"
              className="form-control"
              onChange={(e) => dispatch(search(e.target.value))}
            />
          </div>
          <div className="d-flex ">
            <Link
              to="/wish"
              className="btn p-3 d-flex align-items-center justify-content-between gap-2 me-3"
            >
              <span className="d-flex align-items-center gap-1">
                <i className="fa-solid fa-heart text-danger"></i>
                Wishlist
                <span className="badge m-0 p-0 d-flex align-items-center justify-content-center"></span>
                {wishList.length}
              </span>
            </Link>

            <Link
              className="btn p-3 d-flex align-items-center gap-2 me-3"
              to={"/cart"}
            >
              <i class="fa-solid fa-cart-shopping text-primary"></i>{" "}
              <span>Cart</span>
              <span>{cart.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

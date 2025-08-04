import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../redux/slice/wishSlice";
import { addToCart } from "../redux/slice/cartSlice";

function Wishlist() {
  const { wishList } = useSelector((state) => state.wishSlice);
  console.log(wishList);

  const dispatch = useDispatch();

  const addToCartHandler = (products) => {
    dispatch(addToCart(products));
    dispatch(removeFromWishList(products.id));
  };

  return (
    <>
      <div className="container-fluid py-4" style={{ minHeight: "60vh" }}>
        {/* <h2 className="my-32">Wishlist</h2> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {wishList.length > 0 ? (
                <>
                  {wishList.map((item) => (
                    <div className="col mb-5">
                      <div className="card h-100">
                        <Link className="" to={`/det/${item.id}`}>
                          <img
                            className="card-img-top"
                            src={item.thumbnail}
                            alt="..."
                          />
                        </Link>

                        <div className="card-body p-4">
                          <div className="text-center">
                            <h5 className="fw-bolder">{item.title}</h5>$
                            {item.price}
                          </div>
                        </div>

                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="d-flex justify-content-between">
                            <button
                              className="btn btn-primary"
                              id="icon-button"
                              onClick={() => addToCartHandler(item)}
                            >
                              <i class="fa-solid fa-cart-plus text-primary icon-btn-icon"></i>
                            </button>
                            <button
                              className="btn btn-danger"
                              id="icon-button"
                              onClick={() =>
                                dispatch(removeFromWishList(item.id))
                              }
                            >
                              <i className="fa-solid fa-heart-circle-xmark text-danger icon-btn-icon"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h2>No products</h2>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Wishlist;

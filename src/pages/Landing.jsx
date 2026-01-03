import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProductsThunk,
  nextPage,
  previousPage,
} from "../redux/slice/productSlice";
import { addToWishList } from "../redux/slice/wishSlice";
import { addToCart } from "../redux/slice/cartSlice";


function Landing() {
  const { products, error, loading, productsPerPage, currentPage } =
    useSelector((state) => state.productSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const totalPage = Math.ceil(products.length / productsPerPage);
  const firstIndex = (currentPage - 1) * 10;
  const lastIndex = currentPage * 10;

  const handleNext = () => {
    if (currentPage < totalPage) {
      dispatch(nextPage());
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(previousPage());
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title.slice(0, 20)}... added to Cart!`);
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishList(product));
    toast.info(`${product.title.slice(0, 20)}... added to Wishlist!`);
  };

  return (
    <>
      <header className="bg-secondary pt-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-dark mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-2">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status"></div>
              </div>
            ) : error.length > 0 ? (
              <h2 className="text-center text-danger">{error}</h2>
            ) : (
              products.slice(firstIndex, lastIndex).map((item) => (
                <div className="col mb-5" key={item.id}>
                  <div className="card h-100 shadow-sm">
                    <Link to={`/det/${item.id}`}>
                      <img
                        className="card-img-top"
                        src={item.thumbnail}
                        alt={item.title}
                        onError={(e) => (e.target.src = "/fallback.jpg")}
                      />
                    </Link>
                    <div className="card-body p-3">
                      <div className="text-center">
                        <h5 className="fw-bold text-truncate" style={{ fontSize: "0.9rem" }} title={item.title}>
                          {item.title}
                        </h5>
                        <p className="text-muted mb-0 small">${item.price}</p>
                      </div>
                    </div>
                    <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-outline-primary shadow-sm"
                          id="icon-button"
                          onClick={() => handleAddToCart(item)}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger shadow-sm"
                          id="icon-button"
                          onClick={() => handleAddToWishlist(item)}
                        >
                          <i className="fa-solid fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <div className="pagination-container">
        <button className="btn btn-outline-secondary" onClick={handlePrev}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <span>
          Page {currentPage} of {totalPage}
        </span>
        <button className="btn btn-outline-secondary" onClick={handleNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}

export default Landing;

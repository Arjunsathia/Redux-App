import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishList } from "../redux/slice/wishSlice";
import { addToCart } from "../redux/slice/cartSlice";

function Detail() {
  const [product, setProduct] = useState({});
  // const { products } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const products = JSON.parse(sessionStorage.getItem("apiData"));
    const res = products.find((item) => item.id == id);
    setProduct(res);
  };
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={product.thumbnail}
                alt={product?.title || "Product image"}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">ID: {product?.id || "N/A"}</div>
              <h1 className="display-5 fw-bolder">
                {product?.title || "Product Title"}
              </h1>
              <div className="fs-5 mb-5">
                {product?.oldPrice && (
                  <span className="text-decoration-line-through">
                    ${product.oldPrice}
                  </span>
                )}
                <span>${product?.price || "0.00"}</span>
              </div>
              <p className="lead">
                {product?.description || "No description available."}
              </p>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    id="icon-button"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    <i class="fa-solid fa-cart-plus text-primary icon-btn-icon"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    id="icon-button"
                    onClick={() => {
                      dispatch(addToWishList(product));
                    }}
                  >
                    <i class="fa-solid fa-heart-circle-plus text-danger icon-btn-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;

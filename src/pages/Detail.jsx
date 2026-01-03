import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishList } from "../redux/slice/wishSlice";
import { addToCart } from "../redux/slice/cartSlice";

function Detail() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  },);

  const getProductById = () => {
    const products = JSON.parse(sessionStorage.getItem("apiData")) || [];
    const foundProduct = products.find((item) => item.id === Number(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.warn("Product not found");
      setProduct({});
    }

    setLoading(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to Cart!`);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishList(product));
    toast.info(`${product.title} added to Wishlist!`);
  };

  if (loading) {
    return (
      <section className="py-5 bg-light min-vh-50">
        <div className="container py-5 text-center">
          <h4>Loading product details...</h4>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light min-vh-50">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="border rounded shadow-sm p-3 bg-white text-center">
              {product?.thumbnail ? (
                <img
                  src={product.thumbnail}
                  alt={product.title || "Product Image"}
                  className="img-fluid rounded"
                  style={{ maxHeight: "450px", objectFit: "contain" }}
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-white border rounded p-4 shadow-sm">
              <small className="text-muted">
                Product ID: {product?.id || "N/A"}
              </small>
              <h2 className="fw-bold mt-2 text-dark">
                {product?.title || "Product Title"}
              </h2>

              <div className="fs-5 mb-3 mt-2 text-dark">
                {product?.oldPrice && (
                  <span className="text-decoration-line-through me-2 text-secondary">
                    ${product.oldPrice}
                  </span>
                )}
                <span className="fw-semibold text-success">
                  ${product?.price || "0.00"}
                </span>
              </div>

              <p className="text-muted">
                {product?.description || "No description available."}
              </p>

              <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <button
                  className="btn btn-outline-primary w-100 w-md-auto flex-grow-1"
                  onClick={handleAddToCart}
                  disabled={!product?.id}
                >
                  <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
                </button>
                <button
                  className="btn btn-outline-danger w-100 w-md-auto flex-grow-1"
                  onClick={handleAddToWishlist}
                  disabled={!product?.id}
                >
                  <i className="fa-solid fa-heart-circle-plus me-2"></i>Add to
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;

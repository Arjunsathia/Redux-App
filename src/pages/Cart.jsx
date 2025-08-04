import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkout,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/slice/cartSlice";

function Cart() {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid py-4" style={{ minHeight: "60vh" }}>
        ‰{" "}
        <div className="row">
          {/* Cart Summary */}
          <div className="col-lg-8 mb-4">
            <h2 className="mb-4 text-dark fw-bold">🛒 Cart Summary</h2>
            {cart.length > 0 ? (
              <table className="table table-bordered align-middle text-center shadow-sm">
                <thead className="table-dark ">
                  <tr>
                    <th className="text-secondary">#</th>
                    <th className="text-secondary">Product</th>
                    <th className="text-secondary">Image</th>
                    <th className="text-secondary">Price</th>
                    <th className="text-secondary">Quantity</th>
                    <th className="text-secondary">Total</th>
                    <th className="text-secondary">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.id}>
                      <td className="text-dark">{index + 1}</td>
                      <td className="text-dark fw-semibold">{item.title}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          style={{ height: "100px", objectFit: "contain" }}
                        />
                      </td>
                      <td className="text-dark">${item.price}</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                          <button
                            className="btn btn-sm btn-outline-secondary no-hover"
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </button>
                          <span className="fw-medium">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary no-hover"
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-dark">
                        ${item.price * item.quantity}
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger no-hover"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h4 className="text-muted">No products in the cart.</h4>
            )}
          </div>

          {/* Cart Details */}
          <div className="col-lg-4">
            <h2 className="mb-4 text-dark fw-bold">📦 Cart Details</h2>
            <div className="card p-4 shadow-sm border-0">
              <p className="text-dark mb-2 fw-medium">
                Total Items: {cart.length}
              </p>
              <p className="text-dark mb-3 fw-medium">
                Total Price: $
                {Math.ceil(
                  cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}
              </p>
              <button
                className="btn btn-dark w-100 no-hover"
                onClick={() => dispatch(checkout())}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

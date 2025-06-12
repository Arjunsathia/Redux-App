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
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <h1 className="mb-4">Cart Summary</h1>
            {cart.length > 0 ? (
              <table className="table table-bordered align-middle text-center">
                <thead className="table-secondary">
                  <tr>
                    <th className="text-dark">ID</th>
                    <th className="text-dark">Title</th>
                    <th className="text-dark">Image</th>
                    <th className="text-dark">Unit Price</th>
                    <th className="text-dark">Quantity</th>
                    <th className="text-dark">Total Price</th>
                    <th className="text-dark">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr>
                      <td className="text-dark">{index + 1}</td>
                      <td className="text-dark">{item.title}</td>
                      <td className="text-dark">
                        <img
                          src={item.thumbnail}
                          alt="iPhone"
                          style={{ height: "110px", objectFit: "contain" }}
                        />
                      </td>
                      <td className="text-dark">${item.price}</td>
                      <td className="text-dark">
                        <div className="d-flex justify-content-center align-items-center gap-3">
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-success"
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-dark">
                        ${item.price * item.quantity}
                      </td>
                      <td className="text-dark">
                        <button
                          className="btn btn-sm btn-dark"
                          id="icon-button"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <i className="fa-solid fa-trash text-dark icon-btn-icon"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2>No products</h2>
            )}
          </div>
          <div className="col-4">
            <h1 className="mb-4">Cart Details</h1>
            <div className="card p-3">
              <h5 className="text-dark">Total Items: {cart.length}</h5>
              <h5 className="text-dark">
                Total Price: $
                {Math.ceil(
                  cart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}
              </h5>
              <button className="btn btn-primary w-100 mt-3" onClick={()=> dispatch(checkout())}>
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

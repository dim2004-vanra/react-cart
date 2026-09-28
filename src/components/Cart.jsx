import React, {  useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn text-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          <div>
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between bg-light productCard p-2  align-items-center mb-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                      style={{ width: "75px", height: "75px" }}
                    />
                    <div className="ms-3 cartTitle">
                      <h5 className=" fs-1">
                        {item.title.substring(0, 50)}
                      </h5>
                    </div>
                    <div className="d-flex flex-column ms-3 align-items-end">
                      <p className="my-0">
                        {/* <span className="fw-bolder fs-1">Price: </span>  */}
                        $ {item.price} x {item.quantity}
                      </p>
                      <p className="my-0 fw-bolder fs-1">
                        {/* <span className="fw-bolder fs-1">Total: </span> */}${" "}
                        {item.price * item.quantity}
                      </p>
                      <div className="mb-0 d-flex align-items-center">
                        <div
                          className="btn-group border border-dark rounded-4 overflow-hidden "
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            className="btn btn-sm btn-light border-end"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className=" btn disabled border-0 fw-bolder">
                            {item.quantity}
                          </span>
                          <button
                            className="btn btn-sm btn-light border-start"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-sm text-danger ms-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-danger">
                Your cart is currently empty.
              </p>
            )}
          </div>
        </div>
        <div className="mt-3 offcanvas-footer p-3 d-flex justify-content-between align-items-center">
          <h5>Total: ${cartTotal}</h5>
          <button className="btn btn-outline-success">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;

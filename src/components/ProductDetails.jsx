import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = ({ product }) => {
  const { addToCart, checkCartItemExists } = useContext(CartContext);

  return (
    <>
      <div
        className="modal fade"
        id={`productModal${product.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {product.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt={product.title}
                  />
                </div>
                <div className="col-md-6">
                  <h4>Description</h4>
                  <p>{product.description}</p>
                  <p>
                    {" "}
                    <span className="fw-bold">Category: </span>{" "}
                    {product.category}
                  </p>
                  <h5>Price: ${product.price}</h5>

                  <p>
                    <i className="fa-solid fa-star text-warning"></i>{" "}
                    {product.rating.rate} Rating{" "}
                    <span className="text-primary">
                      ({product.rating.count} reviews)
                    </span>
                  </p>
                  {checkCartItemExists(product.id) ? (
                <p className="text-success m-0">Added to Cart</p>
              ) : (
                ""
              )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                className="btn btn-primary"
                // data-bs-toggle="offcanvas"
                // data-bs-target="#cartOffcanvas"
                data-bs-dismiss="modal"
                // aria-controls="offcanvasExample"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

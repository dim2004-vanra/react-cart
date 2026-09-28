import React from "react";

const Toast = () => {
  return (
    <>
      <div className="toast-container position-fixed bottom-0 start-0 p-3">
        <div
          id="cartToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header shadow border border-dark border-2">
            <strong className="me-auto"><i className="fa-solid fa-check text-success"></i> Product added to cart</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Toast;

import React, { useContext } from 'react'
import ProductDetails from './ProductDetails'
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {

  const { addToCart, checkCartItemExists } = useContext(CartContext);

  return (
    <>
      <div className="card h-100 productCard bg-light ">
        <img
          src={product.image}
          className="card-img-top p-3 bg-white"
          alt={product.title}
          style={{ height: '250px', objectFit: 'contain' }}
        />
        <button className="btn btn-dark border border-dark  position-absolute  py-3 px-3 ps" data-bs-toggle="modal" data-bs-target={`#productModal${product.id}`}>VIEW</button>
        <div className="card-body">
          <h5 className="card-title fs-1">
            {product.title.substring(0, 20)}...
          </h5>
          <p>{product.description.substring(0, 70)}...</p>
          <h5 className="card-text mt-auto">${product.price}</h5>

          <button className="addCartBtn" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="offcanvasExample" onClick={() => addToCart(product)} id='liveToastBtn'>Add to Cart</button>

          {checkCartItemExists(product.id) ? (
            <p className="text-success m-0">Added to Cart</p>
          ) : ("")}
        </div>
      </div>
      <ProductDetails product={product} />
    </>
  )
}

export default ProductCard

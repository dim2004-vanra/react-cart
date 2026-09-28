import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  
  const categaryMap = {
    men: "men's clothing",
    women: "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = categoryName
    ? products.filter(
        (product) => product.category === categaryMap[categoryName]
      )
    : products;


  return (
    <>
      <div className="container mt-3">
        <h1 className="py-4 clr-b">Our Products</h1>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

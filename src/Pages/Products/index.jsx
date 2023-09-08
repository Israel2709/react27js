import React, { useState, useEffect } from "react";
import productsApi from "../../lib/productsApi";
import { Link } from "react-router-dom";

const Products = () => {
  const [productsList, setProductsList] = useState(null);
  useEffect(() => {
    const getAllProducts = async () => {
      const products = await productsApi.getAllProducts();
      setProductsList(products);
    };
    getAllProducts();
  }, []);
  return (
    <div className="col-12">
      <h1>Products Dashboard</h1>
      <ul className="list-group">
        {productsList &&
          productsList.map((product) => (
            <li key={product.id} className="list-group-item">
              {product.title}{" "}
              <Link to={`detail/${product.id}`}>
                <button className="btn btn-dark">Ver detalle</button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../../lib/productsApi";

const Detail = () => {
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    const getProductById = async () => {
      const data = await productsApi.getProductById(productId);
      setProductData(data);
    };
    getProductById();
  }, []);

  console.log(productId);
  return (
    <div className="col-12">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={productData?.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <div className="card-title">{productData?.title}</div>
              </h5>
              <p className="card-text">{productData?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

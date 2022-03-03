import React from 'react';
import './productList.css';
import Product from '../product/Product'

const ProductList = () => {
  return <div className="pl">
    <div className="pl-text">
      <h1 className="pl-title">Create & inspire. it is Omar</h1>
      <p className="pl-desc">I am a medical graduate who is interested 
          in web develpment, i have equal love and interest for 
          medicine and software developement.
          </p>
    </div>
    <div className="pl-list">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  </div>;
};

export default ProductList;

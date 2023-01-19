import React, { useState, useEffect } from "react";
import IconButtons from "../../common/IconButtons";
import './style.css';

interface ProductCardPropTypes {
  productDetail: any;
};

const ProductCard: React.FC<ProductCardPropTypes> = ( {
  productDetail
} ) => {
  return (
    <div className="product-card">
      <img 
        alt={productDetail.name} 
        src={`./assets/images/${productDetail.url}`}
        className="product-image"
      />
      <div className="product-detail">
        <p className="product-name">{productDetail.name}</p>
        <p className="product-stock">В наявності</p>
        <p className="product-price">{productDetail.price}</p>
        <p className="product-number">{productDetail.stock}</p>
      </div>
      <div className="product-cart">
        <IconButtons type="cart" role="add" number="0" />
      </div>
      <div className="product-enjoy">
        <img src='./assets/svgs/weight.svg' />
      </div>
    </div>
  );
}

export default ProductCard;
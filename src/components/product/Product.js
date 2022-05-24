import React from 'react'
import './product.css'

const Product = ({title, image, price, rating}) => {
  return (
    <div className="product">
        <div className="product__info">
            <p>{ title }</p>
            <p className="product__price">
                <strong>{ price }</strong>
                <small>FCFA</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                  <p>🌟</p>
                  ))}
                
            </div>
        </div>
        <img src={image} alt="" />
         <button> Add to Basket</button>
    </div>
  )
}

export default Product

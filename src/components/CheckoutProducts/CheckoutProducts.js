import React from 'react'
import './checkoutProduct.css'

const CheckoutProducts = (id, title, image, price, rating) => {
  return (
    <div className="checkoutProducts">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="CheckoutProducts__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>FCFA</small>
                <strong>{price}</strong>
            </p>
            <p className="checkoutProduct__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                  <p>🌟</p>
                  ))}
            </p>
        </div>
        <button>Remove from basket</button>
    </div>

  )
}

export default CheckoutProducts

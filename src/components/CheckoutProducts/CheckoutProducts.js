import React from 'react'
import { useStateValue } from '../StateProvider';
import './checkoutProduct.css'

function CheckoutProducts ({id, title, image, price, rating, hideButton}) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
        id: id,
    })
  }

  return (
    <div className="checkoutProducts">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="CheckoutProducts__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <strong>{price}</strong>
                <small>€</small>
            </p>
            <div className="checkoutProduct__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                  <p>🌟</p>
                  ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>Remove from basket</button>
            )}
            
        </div>
        
    </div>

  )
}

export default CheckoutProducts

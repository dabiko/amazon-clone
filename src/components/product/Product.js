import React from 'react'
import { useStateValue } from '../StateProvider';
import './product.css'

function Product ({id, title, image, price, rating}) {
  const [, dispatch] = useStateValue();
 //console.log('this is the basket item', basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
        <div className="product__info">
            <p>{ title }</p>
            <p className="product__price">
                <strong>{ price }</strong>
                <small>€</small>
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
         <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}

export default Product

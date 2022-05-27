import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import { useStateValue } from '../StateProvider';
import './payment.css'

function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
            <Link to='/checkout'>{basket?.length} Items</Link>
            )
        </h1>
        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>5 avenue Paul Doumer, 92500 Rueil Malmaison</p>
                <p>Paris, France</p>
            </div>
        </div>

        <div className="payment__section">
              <div className="payment__title">
                <h3>Review Items and Delivery</h3>
              </div>
              <div className="payment__items"> 
              {basket.map( item => (
                            <CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    ))}  
              </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">

            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
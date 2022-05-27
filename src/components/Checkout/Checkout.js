import React from 'react';
import './checkout.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';

function Checkout ()  {
    const [{ basket}] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img 
                className="checkout__banner" 
                src="../../images/checkout_banner.jpg" 
                alt="" 
            />
            <div>
                <h2 className="checout__title">
                    Your Shopping Basket
                </h2>
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

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout

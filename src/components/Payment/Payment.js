import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts';
import { useStateValue } from '../StateProvider';
import './payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../../axios';
import { db } from '../../firebase';

function Payment() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate  = useNavigate();
  const stripe    = useStripe();
  const elements  = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () =>{
      const response = await axios({
        method: 'post',
        //stripes expects total in a currency subunit dalla and euro (100)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket]);

  console.log('The secret is >>>>>', clientSecret)

  const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_mathod: {
            card: elements.getElement(CardElement)
          }
          
        }).then(({paymentIntent}) =>{
//PaymentIntent  is the same as Payment confirmation
          db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
            })

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: 'EMPTY_BASKET'
          })
          navigate.replace('/orders');
        });
  }

  const handleChange = event => {
    //listen for card chnages as the customer types
    //Display errors instantly
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

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
              <form onSubmit={handleSubmit} action="">
                <CardElement  onChange={handleChange}/>
                <div className="payment_priceConatainer">
                  <CurrencyFormat
                        renderText={(value) =>(
                          <>
                            <h1>Order Total: {value}</h1>
                          </> 
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>
                      {processing ? <p>Processing</p> : "Buy Now"}
                    </span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
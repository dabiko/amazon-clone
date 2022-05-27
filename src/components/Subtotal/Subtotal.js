import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{ basket}] = useStateValue();
  const navigate  = useNavigate();

    return <div className="subtitle">
         <CurrencyFormat
           renderText={(value) =>(
            <>
            <p>
                Subtotal ({basket?.length} items) : 
                <strong>{value}</strong>
            </p>
            <small className="subtitle__gift">
                <input type="checkbox" />
                This Order contains a gift
            </small>
          </> 
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"FCFA"}
         />
         <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>;
}


export default Subtotal
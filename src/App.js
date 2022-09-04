import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Page404 from './components/Page404/Page404';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders/Orders';

const promise =  loadStripe('pk_test_51L40a1JKeAGt7TbFUGoIgBrUmlo9S2Vh3Wpu8aGHNMfEyz31KZvNn9n5r8kfCVh7mqE9JDL8zHyyLcoCK5xnEalH00xXkdKqop');



function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch ] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
        <div className="app">
          <Routes>
                <Route path="/orders" element={<> <Header /> <Orders /> </> } />
                <Route path="/login" element={ <Login />} />
                <Route path="/" element={<> <Header /> <Home /> </>} />
                <Route path="/checkout" element={<> <Header /> <Checkout /> </>} />
                <Route path="/payment" element={
                  <>
                    <Header /> 
                    <Elements stripe={promise}>
                      <Payment /> 
                    </Elements>
                  </>
                    } 
                />
                <Route path="*" element={ <Page404 /> } />
          </Routes>
          
          
        </div>
    </Router>
  );
}

export default App;
 
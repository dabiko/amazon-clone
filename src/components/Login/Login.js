import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword 
       } from "firebase/auth";
import './login.css'


function Login() {
    const navigate  = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            if (userCredential) {
                navigate('/');
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
          }); 
    }


    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential);
                if (userCredential) {
                    navigate('/');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
              }); 

    }


  return (
    <div className="login">
        <Link to="/"></Link>
            <img className="login__logo" 
                src="../../images/amazon-login.png" 
                alt="" 
            />
        
        <div className="login__container">
            <h1>Sign-In</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text"  
                       value={email} 
                       onChange={e => setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input type="password"  
                       value={password} 
                       onChange={e => setPassword(e.target.value)}
                />
                <button onClick={signIn} className="login__registerBtn">Sign In</button>
            </form>
            <p>I accept the terms and conditions</p>
            <button onClick={register}  className="login__SignInBtn">Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login

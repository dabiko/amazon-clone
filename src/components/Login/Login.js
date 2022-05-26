import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
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

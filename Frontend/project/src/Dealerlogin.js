import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from './AuthContext';
import Dealer from './Dealer';
import Dealerregister from './Dealerregister';
import ForgotPage from './ForgotPage';

const Dealerlogin = () => {
  const {setdealerlogin}=useContext(AuthContext);
  const [isdealer,setisdealer]=useState(false);
  const [dealerforgot,setdealerforgot]=useState(false);
  const [registerdealer,setRegisterdealer] = useState(false);
  
  const [loginData, setLoginData] = useState({
    Dealer_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/signup/dealerlogin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Login successful');
        setdealerlogin(true);
        setisdealer(true);
        console.log(response.userdata);
      } else {
        alert('Please enter valid details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
if(isdealer){return<Dealer/>;}
if(dealerforgot){return<ForgotPage value={'dealer'}/>;}
if (registerdealer){return<Dealerregister />;}


  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h3>Dealer Login</h3>
        <label>
          Dealer Name
          <input type="text" name="Dealer_name" onChange={handleChange} />
        </label>
              
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        
        <button type="submit">Login</button>
      </form>
      <p onClick={()=>{setdealerforgot(true)}} style={{cursor:'pointer',color:'blue'}}>
        Forgot password?
      </p>
      <p style={{ display: 'inline' }}>Don't have an account? </p>
      <p onClick={() => { setRegisterdealer(true) }} style={{ display: 'inline', cursor: 'pointer', color: 'blue' }}>
        Register here</p>
    </div>
  );
};

export default Dealerlogin;
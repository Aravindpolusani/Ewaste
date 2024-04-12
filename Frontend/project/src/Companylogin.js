import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from './AuthContext';
import Company from './Company';
import Companyregister from './Companyregister'
import ForgotPage from './ForgotPage';

const Companylogin = () => {
  const {setcompanylogin}=useContext(AuthContext);
  const [iscompany,setiscompany]=useState(false);
  const [iscompanyforgot,setiscompanyforgot]=useState(false);
  const [registercompany,setRegistercompany] =useState(false);
  const [loginData, setLoginData] = useState({
    company_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/signup/companylogin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        alert('Login successful');
        setcompanylogin(true);
        setiscompany(true);
      } else {
        alert('Please enter valid details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
if(iscompany){
  return<Company/>;}

if(iscompanyforgot){
  return<ForgotPage value={'company'}/>;}

if (registercompany){
  return<Companyregister />;
}
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h3>Company Login</h3>
        <label>
          Company Name
          <input type="text" name="company_name" onChange={handleChange} />
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
      <p onClick={()=>{setiscompanyforgot(true)}} style={{cursor:'pointer',color:'blue'}}>
        Forgot password?
      </p>
      <p style={{ display: 'inline' }}>Don't have an account? </p>
      <p onClick={() => { setRegistercompany(true) }} style={{ display: 'inline', cursor: 'pointer', color: 'blue' }}>
        Register here</p>
    </div>
  );
};

export default Companylogin;
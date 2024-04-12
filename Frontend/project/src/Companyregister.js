import React, { useState } from 'react';
import Companylogin from './Companylogin';
import './Register.css';

const Companyregister = ({ backgroundImageUrl1, backgroundImageUrl2 }) => {
  const [logincompany,setLogincompany] =useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    password: '',
  });
  
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['company_name', 'email', 'password'];
    const errors = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setValidationErrors(errors);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/signup/c/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully');

        window.location.href = '/clogin';
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (logincompany){return <Companylogin />;}

  return (
    <div className='img'>
    <div className='content'>
    <form onSubmit={handleSubmit}>
      <div className='box'>
        <h3>Company Register</h3>
        
      <label>
        Company Name*
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
        /><br/>
        {validationErrors.company_name && (
          <span style={{ color: 'red' }}>{validationErrors.company_name}</span>
        )}
      </label>
      <br />
      <label>
        Email*
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        {validationErrors.email && (
          <span style={{ color: 'red' }}>{validationErrors.email}</span>
        )}
      </label>
      <br />
      <label>
        Password*
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /><br/>
        {validationErrors.password && (
          <span style={{ color: 'red' }}>{validationErrors.password}</span>
        )}
      </label>
      <br />
      <button type="submit">Register</button><br />
      <p style={{ display: 'inline' }}>Already have an account? </p>
      <p onClick={() => { setLogincompany(true) }} style={{ display: 'inline', cursor: 'pointer', color: 'blue' }}>
        login</p>
       </div>
    </form>

    </div>
    </div>
  );
};

export default Companyregister;
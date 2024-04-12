import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function FormDealer({ onSubmit }) {
  const [dealerDetails, setDealerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDealerDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dealerDetails);
    alert('data added successfully')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={dealerDetails.name} 
      onChange={handleChange} placeholder="Dealer Name" required />

      <input type="email" name="email" value={dealerDetails.email} 
      onChange={handleChange} placeholder="Dealer Email" required />

      <input type="tel" name="phone" value={dealerDetails.phone} 
      onChange={handleChange} placeholder="Phone" required />&nbsp;&nbsp;

      <Button variant="primary" type='submit' >Submit</Button>
    </form>
  );
}

export default FormDealer;



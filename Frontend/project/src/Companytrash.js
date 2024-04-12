import React, { useState } from 'react';
import axios from 'axios';
import './Companytrash.css';
import Company from './Company';


const Companytrash = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    company_email: '',
    product_name: '',
    quantity: '',
    price: '',
  });

  const [cmpback,setcmpback]=useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/pay/', formData);
      alert('Data added successfully');
      console.log('Response:', response.data);
     
    } catch (error) {
      console.log('Error:', error.response.data);
      alert('Something went wrong');
      
    }
  };
 
  if(cmpback){
    return<Company/>
  }

  return (
    <div className='payform'>
      <div className='cmp'>
        <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
      </div>
      <h2>Trash Information</h2>
      <form onSubmit={handleFormSubmit}>

        <div>
          <label>
            Company Name:
            <input type="text" name="company_name" value={formData.company_name} 
            onChange={handleInputChange} required/>
          </label>
        </div>

        <div>
          <label>
            Company Email:
            <input type="email" name="company_email" value={formData.company_email} 
            onChange={handleInputChange} required/>
          </label>
        </div>
      
        <div>
          <label>
            Product Name:
            <input type="text" name="product_name" value={formData.product_name} 
            onChange={handleInputChange} required/>
          </label>
        </div>

        <div>
          <label>
            Total Quantity:
            <input type="number" name="quantity" value={formData.quantity} 
            onChange={handleInputChange} required/>
          </label>
        </div>

        <div>
          <label>
            Total Price:
            <input type="number" name="price" value={formData.price} 
            onChange={handleInputChange} required/>
          </label>
        </div>

        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
};

export default Companytrash;

import React, { useState } from 'react';
import axios from 'axios';
import './Companysell.css'
import Company from './Company';

const Companysell = () => {
  const [formData, setFormData] = useState({
    Product_name: '',
    Product_Image: null,
    Price: null,
    Proct_used_in_years: null,
    Summary:null,
    Company_Email:null,
    Quantity:'',
    Company:null,
  });

  const [cmpback,setcmpback]=useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, Product_Image: file });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/company/', formDataToSend);
      alert('Data added successfully')
      console.log('Response:', response.data);
    } catch (error) {
      console.log('Error:', error.response); 
      alert('Something went wrong')     
    }
  };
  if(cmpback){
    return<Company/>
  }
  return (
  <div>
    <div className='cmp'>
    <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
    </div> 
    <div className='form-container'>
      <form onSubmit={handleFormSubmit}>
        <h3>Sell Details</h3>
                
        <label>
          Product Name:
          <input type="text" name="Product_name" value={formData.Product_name} 
          onChange={handleInputChange} required />
        </label>

        <label>
          Product Image:
          <input type="file" name="Product_Image" onChange={handleImageChange}  required/>
        </label>

        <label>
          Price:
          <input type="number" name="Price" value={formData.Price} onChange={handleInputChange} required/>
        </label>

        <label>
          Product Used In Years:
          <input type="number" name="Proct_used_in_years" value={formData.Proct_used_in_years} 
          onChange={handleInputChange} required/>
        </label>

        <label>
          Summary:
          <input type="text" name="Summary" value={formData.Summary} onChange={handleInputChange} required/>
        </label>

       <label>
         Company_Email:
          <input type="email" name="Company_Email" value={formData.Company_Email} 
          onChange={handleInputChange} required/>
        </label>
        
        <label>
         Quantity:
          <input type="number" name="Quantity" value={formData.Quantity} onChange={handleInputChange} required/>
        </label>

        <label>
        Company:
       <input type="text" name="Company" value={formData.Company} onChange={handleInputChange} required/>
       </label> 

        <button type="submit">Submit</button>
      </form>
    </div></div>
  );
};

export default Companysell;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Highestbidpage.css';
import Company from './Company';

function Highestbidpage() {
  
  const [products, setProducts] = useState([]);
  const [cmpback,setcmpback]=useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000//highestbids/'); 
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (cmpback){
    return <Company />
  }

  return (
    <div className='highbid'>
        <div className='cmp'>
        <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
      </div>
      <h2>Highest Bidding Details</h2><br />
      <table className='highestbid'>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Amount</th>
            <th>Product Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.user_name}</td>
              <td>${product.amount}</td>
              <td>{product.product_name}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Highestbidpage;

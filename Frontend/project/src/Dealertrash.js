import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dealertrash.css';
import Dealer from './Dealer';

const Dealertrash = () => {
  const [data, setData] = useState([]);

  const [cmpback,setcmpback]=useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/pay/get/'); 
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (cmpback){
    return <Dealer />
  }

  return (
    <div className='display'>
      <div className='cmp'>
        <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
      </div>
      <h1>Stored Information</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.company_name}</h2>
            <p>Company Email: {item.company_email}</p>
            <p>Product Name: {item.product_name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dealertrash;

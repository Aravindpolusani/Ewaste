import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BidForm.css';
import Company from './Company'; 

const BidForm = () => {
  const [highestbid, setHighestBid] = useState([]);
  const [cmpback, setCmpBack] = useState(false);

  const startBid = async () => {
    try {
      setHighestBid([]);
      alert('Bidding going to start');
      await axios.post('http://localhost:8000/startbid/', {
        started: true,
      });
    } catch (error) {
      alert('Something went wrong');
    }
  };

  const stopBid = async () => {
    try {
      alert('You ended the bidding');
      const response = await axios.post('http://localhost:8000/startbid/', {
        started: false,
      });
      setHighestBid(response.data);
    } catch (error) {
      alert('Something went wrong');
    }
  };

  if (cmpback) {
    return <Company />;
  }

  

  return (
    <div className="bid-form-container">
      <div className='cmp'>
        <i className="fa fa-angle-double-left" aria-hidden="true" onClick={() => { setCmpBack(true) }}></i>
      </div>

      <div className="control-buttons-container">
        <button onClick={startBid} className="start-button">Start Bidding</button>&nbsp;&nbsp;
        <button onClick={stopBid} className="finish-button">Finish Bidding</button><br /><br />

        {highestbid && highestbid.length === 0 && <h2>No highest bid found</h2>}
{highestbid && highestbid.length > 0 && highestbid.map((obj) => (
  <div key={obj.id}>
    <p>User: {obj.user_name}</p>
    <p>Amount: {obj.amount}</p>
  </div>
))}

      </div>

    </div>
  );
};

export default BidForm;

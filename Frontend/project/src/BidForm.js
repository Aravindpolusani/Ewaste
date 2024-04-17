import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './BidForm.css';
import Company from './Company'; 

const BidForm = () => {
  const [highestbid, setHighestBid] = useState({});
  const [cmpback, setCmpBack] = useState(false);

  const startBid = async () => {
    try {
      await axios.post('http://localhost:8000/startbid/', {
        started: true,
      });
      alert('Bidding started successfully');
    } catch (error) {
      alert(error.response.data.message || 'Failed to start bidding');
    }
  };

  const stopBid = async () => {
    try {
      const response = await axios.post('http://localhost:8000/startbid/', {
        started: false,
      });
      setHighestBid(response.data);
      alert('Bidding stopped successfully');
    } catch (error) {
      alert(error.response.data.message || 'Failed to stop bidding');
    }
  };

  if (cmpback) {
    return <Company />;
  }

  return (
    <div className="bid-form-container">
      <Helmet>
        <title>Company-Bidding | E-waste Management</title>
      </Helmet>
      <div className='cmp'>
        <i className="fa fa-angle-double-left" aria-hidden="true" onClick={() => { setCmpBack(true) }}></i>
      </div>

      <div className="control-buttons-container">
        <button onClick={startBid} className="start-button">Start Bidding</button>&nbsp;&nbsp;
        <button onClick={stopBid} className="finish-button">Finish Bidding</button><br /><br />
        
        {highestbid && Object.keys(highestbid).length === 0 && <h2>No highest bid found</h2>}
        {highestbid && Object.keys(highestbid).length > 0 && (
          <div>
            <h2>Highest Bid</h2>
            <p>User Name: {highestbid.user_name}</p>
            <p>Amount: {highestbid.amount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BidForm;

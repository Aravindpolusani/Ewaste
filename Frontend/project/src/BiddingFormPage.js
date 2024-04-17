import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Dealer from './Dealer';
import './BiddingFormPage.css'; 

const BiddingFormPage = ({ onSubmitBid }) => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [cmpback, setCmpback] = useState(false);
  const [bideddata, setBideddata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bidResponse = await axios.get('http://localhost:8000//bidedata/');
        setBideddata(bidResponse.data);
      } catch (error) {
        console.log('Error fetching bid data:', error);
      }
    };
    fetchData();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/bid/', {
        'user_name': userId,
        'amount': amount
      });
      setAmount('');
      alert(response.data.message); 
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message); 
      } else {
        alert('An error occurred while processing your request.');
      }
    }
  };

  if (cmpback) {
    return <Dealer />;
  }

  return (
    <div>
      <Helmet>
        <title>Dealer-Bidding | E-waste Management</title>
      </Helmet>
      <div className="bid-form-container1">
        <div className='cmp'>
          <i className="fa fa-angle-double-left" aria-hidden="true" onClick={() => { setCmpback(true) }} ></i>
        </div>
        <div className="bidding-in-progress">
          <h2>Bidding in Progress</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              User Name:
              <input type="text" className="form-input" value={userId} 
                onChange={(e) => setUserId(e.target.value)} required />
            </label>
            <label className="form-label">
              Amount:
              <input type="number" className="form-input"  
                onChange={(e) => setAmount(e.target.value)} required />
            </label>
            <button type="submit" className="submit-button">Submit Bid</button>
          </form>
        </div>
      </div>
      {bideddata && bideddata.length > 0 && (
        <div id='tablediv'>
          <table className="bided-table">
            <thead>
              <tr>
                <th>User_Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {bideddata.map((obj) => (
                <tr key={obj.id}>
                  <td>{obj.user_name}</td>
                  <td>{obj.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BiddingFormPage;

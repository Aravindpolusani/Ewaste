import React, { useState,useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Dealer from './Dealer';
import './BiddingFormPage.css'; 

const BiddingFormPage = ({ onSubmitBid }) => {
  const [userId, setUserId] = useState('');
  const [amount, setAmount] = useState('');
  const [cmpback,setcmpback] = useState(false);
  const [bideddata,setbideddata] = useState([]);
  useEffect(()=>{
    const fetchdata = async ()=>{
      try{
        const bidresponse= await axios.get('http://localhost:8000//bidedata/');
      setbideddata(bidresponse.data);
      }
      catch{
        console.log('errors');
      }
    };
    fetchdata();
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/bid/',{
      'user_name':userId,'amount':amount
      });
      alert('Bid submited')
      setUserId('');
      setAmount('');
    } catch {
      alert('Bidding is not started at')      
    }
  };

  if (cmpback){
    return <Dealer />
  }

  return (
    <div>
      <Helmet>
      <title>Dealer-Bidding | E-waste Management</title>
      </Helmet>
    <div className="bid-form-container1" >
      <div className='cmp'>
    <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
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
          <button type="submit" className="submit-button" onClick={handleSubmit}>Submit Bid</button>
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

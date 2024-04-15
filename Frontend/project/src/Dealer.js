import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import Dealertrash from './Dealertrash';
import Dealerproduct from './Dealerproduct';
import BiddingFormPage from './BiddingFormPage';
import './Dealer.css';
import oip from './Images/OIP.jpeg';

function Dealer() {
    const [productclick,setproductclick]=useState(false);
    const [trashclick,settrashclick]=useState(false);
    const [bid1,setbid1] = useState(false);
    
    if(productclick){
      return <Dealerproduct/>
    }
    if(trashclick){
      return <Dealertrash/>
    }
    if (bid1){
      return <BiddingFormPage />
    }

  return (
  
      <div className='ewaste4'>
        <Helmet>
           <title>Dealer | E-waste Management</title>
      </Helmet>
          <div className='oip'>
            <img src={oip} />
            <div className='textboxes'>
              <div className='textbox5'>
                <p>Don't trash it, recycle your e-waste and <br />make a difference</p>
                <p>Refuse what you do not need; reduce what<br /> you do need; reuse what you consume</p>
              </div>

              <div className="textbox4">
                <Button variant="outline-primary" onClick={()=>{setproductclick(true)}}>Products</Button>{' '}
                <Button variant="outline-primary" onClick={()=>{settrashclick(true)}}>Trash</Button>{' '}
                <Button variant="outline-primary" onClick={()=>{setbid1(true)}}>Bidding</Button>{' '}
              </div>
            </div>
          </div>
      </div>
    
  
  );
}

export default Dealer;


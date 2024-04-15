import React, { useState } from 'react';
import './Company.css';
import { Helmet } from 'react-helmet';
import Button from 'react-bootstrap/Button';
import wasteImage from './Images/Backimg.jpg';
import Companysell from './Companysell';
import Companytrash from './Companytrash';
import BidForm from './BidForm';
import Highestbidpage from './Highestbidpage';
import Cart from './Cart';


  function Company() {
    const [sellclick,setsellclick]=useState(false);
    const [removeclick,setremoveclick]=useState(false);
    const [cartclick,setCartclick]=useState(false);
    const [bid2,setbid2] = useState(false);
    const [bid5,setbid5] = useState(false);

    if(sellclick){
      return <Companysell/>
    }
    if(removeclick){
      return <Companytrash/>
    }
    if (cartclick){
      return <Cart />
    }
    if (bid2){
      return <BidForm />
    }
    if (bid5){
      return <Highestbidpage />
    }

  return (
    
    <section className="cont">
      <Helmet>
      <title>E-waste Management-company</title>
      </Helmet>
      <div className='waste'>
        <img src={wasteImage} alt="Electronic waste" />
        <div className="overlay">
          <div className='textbox2'>
            <p>Don't trash it, recycle your e-waste and <br />make a difference</p>
            <p>Refuse what you do not need; reduce what<br /> you do need; reuse what you consume</p>
          </div>
          <div className="textbox">
            <button className='btn1' onClick={()=>{setsellclick(true)}} >Sell your E-waste</button>
            <button className='btn2' onClick={()=>{setremoveclick(true)}}>Remove your E-Trash</button>
          </div>
        </div>
        <div className='order'>
          <Button variant="success" onClick={()=>{setCartclick(true)}}>Orders</Button>{' '}
          <Button variant="success" onClick={()=>{setbid2(true)}}>Bidding</Button>{' '}
          <Button variant="success" onClick={()=>{setbid5(true)}}>Highest Bids</Button>{' '}
        </div>
      </div>
    </section>
  );
}

export default Company;


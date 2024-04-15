import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Cart.css';
import Company from './Company';

function Cart() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const imageUrl = searchParams.get('image');
  const product = JSON.parse(searchParams.get('product'));

  const [cmpback,setcmpback]=useState(false);

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const deleteProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if(cmpback){
    return<Company/>
  }

  return (
    <div>
      <Helmet>
      <title>Company-Orders | E-waste Management</title>
      </Helmet>
      <div className='cmp'>
    <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
    </div> 
      <div className='free'>
        <h1>Orders</h1>
      </div>
    
      <div className="cart-container">
          <div className="product-list">
            {cart.map((item, index) => (
              <div key={index} className="product-item">
                <img src={`http://127.0.0.1:8000${item.Product_Image}`} alt={item.Product_name} className="product-image" />
                <div className="product-details">
                  <h3>{item.Product_name}</h3><br />
                  <p>Price: {item.Price}</p><br />
                  <p>Product used in years: {item.Proct_used_in_years}</p><br />
                  <p>Quantity: {item.quantity}</p><br />
                  <p>Summary: {item.Summary || 'N/A'}</p><br />
                  {item.dealerDetails && (
                    <>
                      <p>Dealer Name: {item.dealerDetails.name}</p><br />
                      <p>Dealer Email: {item.dealerDetails.email}</p><br />
                      <p>Dealer Phone: {item.dealerDetails.phone}</p>
                    </>
                  )}
                  <button onClick={() => deleteProduct(index)}>Remove</button>
                </div>
              </div>
            ))}
      
        </div>
      </div>
    </div>
  );
}

export default Cart;




import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import './Productdetails.css';
import FormDealer from './FormDealer';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [dealerDetails, setDealerDetails] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/company/products/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const addToCart = () => {
    if (product && dealerDetails) {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = [...existingCart, { ...product, quantity: 1, dealerDetails }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Order placed successfully');
    } else {
      alert('Please select a product and enter dealer details first');
    }
  };

  const handleDealerDetailsSubmit = (details) => {
    setDealerDetails(details);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='outer-div'>
      <div className='image-div'>
        <h1>{product.Product_name}</h1>
        <img src={`http://127.0.0.1:8000${product.Product_Image}`} height={'400px'} width={'400px'} alt={product.Product_name}/>
      </div>
      <div className='details'>
        <p>Price: {product.Price}</p>
        <p>Product Used in Years: {product.Proct_used_in_years}</p>
        <p>Summary: {product.Summary}</p>
        <p>Company Email: {product.Company_Email}</p>
        <p>Quantity: {product.Quantity}</p>
        <p>Company: {product.Company}</p>
        <FormDealer onSubmit={handleDealerDetailsSubmit} />
        <div className='rev'>
        <Button variant="success" onClick={addToCart} style={{width:'100px'}}>Order</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


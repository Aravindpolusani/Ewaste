import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Dealerproduct.css'; 
import Dealer from './Dealer';

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const [cmpback,setcmpback]=useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/company/products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error.message));
  }, []);
  
  if(cmpback){
    return<Dealer/>
  }

  return (
    <div className='products'>
      <Helmet>
      <title>Dealer-Products | E-waste Management</title>
      </Helmet>
      <div className='tree'>
      <div className='cmp'>
        <i class="fa fa-angle-double-left" aria-hidden="true" onClick={()=>{setcmpback(true)}} ></i>
      </div> 
      
      <h1><b>Product List</b></h1>
      </div>

      {error && <div>Error fetching products: {error}</div>}
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-details">
            <Link to={`/product/${product.id}`}>
              {product.Product_Image && <img 
                src={product.Product_Image} 
                alt={product.Product_name} 
                className="product-image"
              />}
            </Link>
            <div className="product-info">
              <h2>{product.Product_name}</h2>
              <p>Price: {product.Price}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Products;


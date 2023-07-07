import React, { useState } from 'react';
import { Link} from "react-router-dom";
import './style.css'
import Products from '../products';
const AddProducts = () => {
  const [name, ProductName] = useState('');
  const [price, ProductPrice] = useState('');
  const [thumbnail,ProductThumbnail]=useState('')
  const [discountPercentage,ProductDiscountPercentage]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='addProducts'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => ProductName(e.target.value)} />
        </label>
        <br />
        <br/>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => ProductPrice(e.target.value)} />
        </label>
        <br />
        <br/>
        <label>
          discountPercentage:
          <input type="percentage" value={discountPercentage} onChange={(e) => ProductDiscountPercentage(e.target.value)} />
        </label>
        <br />
        <br/>
        <label>
          thumbnail:
          <input type="text" value={thumbnail} onChange={(e) => ProductThumbnail(e.target.value)} />
        </label>
        <br />
        <br/>
        <Link to={`/Products/${Products.id}` }className="button">
            <button type="add" className="view">Add Product</button >
        </Link>
        

      </form>
    </div>
  );
};
export default AddProducts;
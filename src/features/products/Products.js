import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Products.module.css';
import { fetchAsync } from './productsSlice';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products);


  return (
    <div>
      <div >
        <button
          onClick={() => {dispatch(fetchAsync())
          console.log(fetchAsync())}}
        >
          Fetch Products
        </button>
        { products.map(product=> 
        <div className={styles.card}>   
          <img src={product.thumbnail} alt={product.title} style={{width:"100%"}}/>
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>
          <p><button>Add to Cart</button></p>
        </div>)}
       
       
      </div>
    </div>
  );
}

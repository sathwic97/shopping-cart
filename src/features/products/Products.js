import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Products.module.css';
import { fetchAsync } from './productsSlice';
import { addAsync } from '../cart/cartSlice';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products);

useEffect(()=>{
  dispatch(fetchAsync())
},[])
  return (
    <div>
      <div >
       
        { products.map(product=> 
        <div key={product.id} className={styles.card}>   
          <img src={product.thumbnail} alt={product.title} style={{width:"100%"}}/>
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>
          <p><button
          onClick={()=>{
            dispatch(addAsync())

          }}>Add to Cart</button></p>
        </div>)}
       
       
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import { fetchAsync } from './productsSlice';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.items);

useEffect(()=>{
  dispatch(fetchAsync())
},[])

  return (
    <div>
      <div >
       
        { items.map(item=>   <div className={styles.cart-item}>
          <img className={styles.image}
          scr={item.thumbnail}
          alt={item.title}/>

          <div className={styles.description}>
            <p>{item.title}</p>
            <span>{item.brand}</span>
            <strong>{item.price}</strong>
            </div>
            <div className={styles.quantity}>
              Quantity
              <select name=" " id=" ">
                <option value={1} >1</option>
                <option value={1} >1</option>
                <option value={1} >1</option>
              </select>
              </div>
              <div className={styles.close}>
                <button>X</button>

              </div>


          </div>
)}
       
       
      </div>
    </div>
  );
}

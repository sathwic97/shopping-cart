import React, { } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import styles from './Cart.module.css';
import { deleteAsync, updateAsync } from './cartSlice';



export function Cart() {

  const items = useSelector(state=>state.cart.items);
const dispatch = useDispatch();

const handleChange = (e,id) =>{
dispatch(updateAsync({id, change: {quantity: +e.target.value}}))
}

  return (
    <div>
      <div >
       
        { items.map(item=>   <div className={styles.cart}>
          <img className={styles.image}
          src={item.thumbnail}
          alt={item.title}/>

          <div className={styles.description}>
            <p>{item.title}</p>
            <span>{item.brand}</span>
            <strong>{item.price}</strong>
            </div>
            <div className={styles.quantity}>
              Quantity
              <select value={item.quantity} onChange={(e)=>{handleChange(e,item.id)}} >
                <option value={1} >1</option>
                <option value={2} >2</option>
                <option value={3} >3</option>
                <option value={4} >4</option>
                <option value={5} >5</option>
              </select>
              </div>
              <div className={styles.close}>
                <button
                onClick={()=>{
                  dispatch(deleteAsync(item.id))

                }}
                >X</button>

              </div>
            <h1>Total : {items.reduce((acc, item)=> item.price * item.quantity + acc , 0 )}</h1>  


          </div>
)}
       
       
      </div>
    </div>
  );
}

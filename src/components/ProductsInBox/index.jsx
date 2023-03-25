import React from 'react'
import style from './style.module.css'


export default function productsInBox({id, title, price, count, addingCount, killCount}) {
  
  return (
    <div className={style.card}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
          <button className= {style.btnIncr} onClick={()=>addingCount(id)}>+</button>
          <button className= {style.btnDecr}onClick={()=>killCount(id)}>-</button>
        </div>
    </div>
  )
}

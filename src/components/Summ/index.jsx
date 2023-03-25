import React from 'react'
import style from './style.module.css'

export default function Summ({box}) {

    const summPrice = box.reduce((ac, {count, price}) => ac + count * price, 0);
    const summCount = box.reduce((ac, {count}) => ac + count, 0);

  return (
    <div className={style.summ}>
        <p className={style.summPrice}>
            Summ-price: {summPrice}
        </p>
        <p className={style.summCount}>
            Summ-count: {summCount}
        </p>
    </div>
  )
}

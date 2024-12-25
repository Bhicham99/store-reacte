import React from 'react'
import storeItem from '../data/storeItems.json'
import formatCurrency from './formatCurrency';
import { useShopingCarte } from '../context/ShopingCarteProvider';


const CarteItem = ({id, quantity}) => {
  const {removeItem} = useShopingCarte()
  const item = storeItem.find((i)=> i.id === id);
  return (
    <div className='d-flex justify-content-center align-items-center gap-2'>
      <img src={"/images/"+item.thumbnail} alt="" className='' style={{width:'120px' , height:'75px'}}/>
      <div>
        <div style={{fontSize:'0.85rem'}}>{item.title} <span className='text-primary'>*{quantity} </span></div>
        <div className='muted'> {formatCurrency(item.price)} </div>
      </div>
      <div className='d-flex flex-column align-items-end'>
        <button onClick={()=>removeItem(id)} className='btn btn-outline-danger w-50 '>x</button>
        <div className='fw-blod'>{formatCurrency(item.price * quantity)}</div>
      </div>
    </div>
  )
}
export default CarteItem;

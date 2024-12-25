import React from 'react'
import formatCurrency from './formatCurrency'
import { Button } from 'react-bootstrap';
import { useShopingCarte } from '../context/ShopingCarteProvider';

const StoreItem = ({id, title, price, thumbnail}) => {
  const {getItemsQuantity, increseCarteQuantity, decreseCarteQuantity, removeItem, inputValue} = useShopingCarte()
  let quantity = getItemsQuantity(id);
  
  return (
    <>
    
    <div className='card m-2 rounded border shadow-sm'>
      <img className='card-img-top p-2 w-80' src={'/images/'+ thumbnail} alt=""  />
      <div className='card-title d-flex justify-content-center align-items flex-column p-2'>
        <p className='fs-6'>{title}</p>
        <p className='fs-5 fw-semibold text-muted'>{formatCurrency(price)}</p>
      </div>
      <div className='card-body mt-0'>
        {quantity === 0 ? (<Button onClick={()=>increseCarteQuantity(id)} className='w-100 '>Add to cart</Button>):
        <div>
          <div>
            <Button onClick={()=>decreseCarteQuantity(id)} className='m-2'>-</Button>
            <span>{quantity} in carte </span>
            <Button onClick={()=>increseCarteQuantity(id)} className='m-2'>+</Button>
          </div>
          <Button onClick={()=>removeItem(id)} className='m-2 btn-danger'>Remove</Button>  
        </div>}
      </div>
    </div>
  </>
  )
}

export default StoreItem

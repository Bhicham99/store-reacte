import React from 'react'
import { useShopingCarte } from '../context/ShopingCarteProvider'
import CarteItem from './CarteItem'
import { Offcanvas } from 'react-bootstrap'
import storeItem from '../data/storeItems.json'
import formatCurrency from './formatCurrency'

const ShoppingCarte = () => {
    const {carteItem, closeCart, isOpen} = useShopingCarte()

    const clcTotale = () => {
        let total = 0;
        carteItem.map(item => {
            const foundItem = storeItem.find(i => i.id === item.id);
            total += foundItem ? item.quantity*foundItem.price : 0;
        });
        return total;
    };
    

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {carteItem.length > 0 ? carteItem.map((item)=>{
            return <><CarteItem {...item}/> <hr /></>
          }): <p>n'a pas un item</p>}
            <div className='text-end fs-2'>
                {carteItem.length > 0  ? formatCurrency(clcTotale()): ''}
            </div>
        </Offcanvas.Body>
      </Offcanvas>
  )
}

export default ShoppingCarte

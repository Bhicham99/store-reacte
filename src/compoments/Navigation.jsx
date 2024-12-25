import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FaCartPlus } from "react-icons/fa";

import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShopingCarte } from '../context/ShopingCarteProvider';

const Navigation = () => {
  const {openCart, carteItem, mode, setMode, handleMode} = useShopingCarte()

  
  const [color, setColor] = useState('')

  

  const totaleQuantity = ()=>{
    return carteItem.reduce((total, item)=>{
    return total + item.quantity
  },0)}

  return (
  <Navbar sticky='top' className={`bg-${mode?'light':'dark'} navbar-${mode?'light':'dark'} shadow-sm mb-3`}>
    <Container>
      <Nav>
        <Navbar.Brand  href="#home">My Store</Navbar.Brand>
        <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
        <Nav.Link to={"store"} as={NavLink}>Store</Nav.Link>
        <Nav.Link to={"about"} as={NavLink}>About</Nav.Link>
      </Nav>
      <div className='d-flex justify-content-between' style={{width:'100px'}}>
      <Button variant='outline-primary' className='rounded-circle Carte me-2' onClick={openCart}>
        
        <FaCartPlus/>
          {totaleQuantity()?<div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ' >{totaleQuantity()}</div>:''}
        
      </Button>
      <Button onClick={handleMode} className=''>{mode?<i class="bi bi-brightness-low-fill"></i>:<i class="bi bi-moon-stars"></i>}</Button>
      </div>
        
    </Container>
  </Navbar>
  );
}

export default Navigation

import React from 'react'
import { useShopingCarte } from '../context/ShopingCarteProvider'

const SearshItem = () => {
  const {searsh, inputValue} = useShopingCarte();
  

  return (
    <form class="d-flex input-group mb-3" role="search">
        <input onChange={(i)=>searsh(i.target.value)} class="form-control mr-3 shadow-sm" type="search" placeholder="Search" aria-label="Search"/>
        
    </form>
  )
}

export default SearshItem

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Home from './compoments/Home';
import Store from './compoments/Store';
import About from './compoments/About';
import Navigation from './compoments/Navigation';
import { Container } from 'react-bootstrap';
import ShopingCarteProvider, { useShopingCarte } from './context/ShopingCarteProvider';
import SearshItem from './compoments/SearshItem';
import ShoppingCarte from './compoments/ShoppingCarte';
import { useState } from 'react';


function App() {
  const [data, setData] = useState (false) ;
  console.log(data);
  
    return (
  
    <div className={`bg-${data?'dark':'light  '}`}>

    <ShopingCarteProvider setData={setData}>
    <Navigation/>
    <Container >
      <SearshItem className='Searsh'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </Container>
    </ShopingCarteProvider>
    
    </div>
  );
}

export default App;

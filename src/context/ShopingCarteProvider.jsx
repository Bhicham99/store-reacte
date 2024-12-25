import { createContext, useContext, useState } from "react";
import ShoppingCarte from "../compoments/ShoppingCarte";

const ShopingCarteContext = createContext({})


const ShopingCarteProvider = ({children,setData}) => {
    const [carteItem, setCarteItem] = useState([])
    const [isOpen , setIsOpen] = useState();
    const [inputValue, setInputValue] = useState('');
    const [mode , setMode] = useState(true);


    

    
    const searsh = (e)=>{
      setInputValue(e)
    }
    
    const handleMode = () => {
      mode? 
      setMode(false):
      setMode(true);
      
      setData(mode) ;
      
      
    }

    const openCart = () => {
      setIsOpen(true)
    }

    const closeCart = () => {
      setIsOpen(false)
    }
    // function get item quntity
    const getItemsQuantity = (id)=>{
      const item = carteItem.find((item)=> item.id === id )
      return item?item.quantity:0;
    }

    // function increse carte quantity
    const increseCarteQuantity = (id)=>{
      setCarteItem((current)=>{
        const itemExeste = current.find((item)=> item.id === id );
        if(!itemExeste){
          return [...current, {id, quantity:1}];
        }else{
          return current.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }; // Incrémentation de la quantité
            }
            return item;
            
          })
        }
      })
    }

    // function decrese carte quantity
    const decreseCarteQuantity = (id)=>
    {
      setCarteItem((current) => {
        const item = current.find((item)=> item.id === id);
        if(item){
          if(item.quantity === 1){
            return current.filter((item)=> item.id !== id);
          }else{
            return current.map((item)=>{
              if(item.id===id){
                return {...item, quantity: item.quantity - 1}
              }
              return item;
            })

          }
        }
        return current; 
      })
      
    };

    //function remove
    const removeItem = (id) =>{
      return setCarteItem((current)=> current.filter((item)=> item.id !== id));
    }
  return (
    <ShopingCarteContext.Provider value={{
                                          carteItem,
                                          isOpen,
                                          inputValue,
                                          mode,
                                          getItemsQuantity,
                                          increseCarteQuantity,
                                          decreseCarteQuantity,
                                          removeItem,
                                          openCart,
                                          closeCart,
                                          searsh,
                                          setMode,
                                          handleMode
                                          }}>
        {children}
        <ShoppingCarte/>
    </ShopingCarteContext.Provider>
  )
  
}

export default ShopingCarteProvider;

export const useShopingCarte = ()=>{
    return useContext(ShopingCarteContext);
}

import { Routes , Route } from 'react-router-dom'
import Header from './Header'
import MainPage from './MainPage'
import './index.css'
import Products from './Products'
import { useEffect, useState } from "react"

import SeperatePage from './SeperatePage'
import Cart from './Cart'

function App() {
   const[items,setItems]= useState([
     { 
      id:1,
      title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price:109.95,
      description :"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category:"men's clothing",
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating:{	
      rate:3.9,
      count:120
      
     }
   }]);

  const [search,setSearch] = useState("")
  const [searchResult,setSearchResult]= useState([])
  const [cart,setCart] = useState([{
    id :1,
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price : 109.95,
    quantity : 1
  }])

  const [advertisement,setAdvertisement] = useState(["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"])
  
  
    useEffect (  ()  => {
     const product = async ()=> {
     try  {
     const response = await fetch("https://fakestoreapi.com/products")
     const responseJson = await response.json()
     setItems(responseJson)
     console.log(responseJson)
     setSearchResult(responseJson)
     } catch (error){
       console.log(error.Message)
     }finally{
       console.log("finally was executed")  
     }
     }
     product ();
  } ,[])
  
    
   useEffect(()=>{
     const filteredResult = items.filter((prod)=>(((prod.title).toLowerCase()).includes(search.toLowerCase())))
     setSearchResult(filteredResult)
     console.log(filteredResult)  
   },[search ,items])
  

  return (
    <>
    <Routes>
      <Route path = "/" element = {< MainPage  
      items = {searchResult}
      search ={search}
      setSearch = {setSearch}
      advertisement ={advertisement}
      setAdvertisement ={setAdvertisement}
      
      />}/>
   
      
      <Route path='/:id' element = {< SeperatePage 
      items = {items}
      setItems = {setItems}
      
      />} />

      <Route path='/cart/:id' element ={<Cart
      items = {items}
      setItems = {setItems}
      cart={cart}
      setCart={setCart}
      
      />} />
      <Route path='/cart/' element ={<Cart
      items = {items}
      setItems = {setItems}
      cart={cart}
      setCart={setCart}
      
      />} />
      

    </Routes>

    </>
  )
}

export default App

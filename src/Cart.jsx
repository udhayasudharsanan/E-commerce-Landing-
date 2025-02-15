import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Header from "./Header";
import { MdAddShoppingCart } from "react-icons/md";



function Cart ({items ,cart,setCart}){

const {id} = useParams()

const [totalPrice,setTotalPrice]=useState(0)



 useEffect(()=>{
    
  
    if(!id|| isNaN(Number(id))){
      console.log("id number is ",id)
        return    
    } 
    
    console.log(Number(id))


    
    const product = items.find((prod)=>
        prod.id === Number(id))
    
    if(!product){
        console.log("product not found for this id ", id)
    }
    
        setCart((prev)=>{
        const existingItem = prev.find((item)=>item.id === product.id)
        
        if(existingItem){
         return prev.map((prevItem)=>
            prevItem.id === existingItem ? 
                {...prevItem,quantity : prevItem.quantity+1} : prevItem
        ) 

        }else{
        return [...prev, {id: product.id, title: product.title,
            image:product.image,price:product.price,
            quantity : 1 }]
        }
        } 
    ) 

},[id,setCart,items])
 
const changeQuantity = (id,value)=>{

    const whetherQuantity = cart.find((item)=>(
        item.id ===id && item.quantity <=0
    ))
    
    if(whetherQuantity){
       handleDelete(whetherQuantity.id)
    }else{
    setCart((prevCart)=>
        prevCart.map((item)=>
            item.id === id ? {
                ...item,
                quantity : item.quantity + value
            } : item
        )
    )
 }
}
useEffect(()=>{

    
        const price = cart.reduce((accum,current)=>
            accum + (current.price * current.quantity) , 0 
        )
         
        setTotalPrice(price.toFixed(2))
    

},[cart])

useEffect(()=>{
    const del  =cart.filter(item=>
        item.quantity <= 0 ? item.id : item 
        )
    handleDelete(del)    
},[setCart,id])

const handleDelete=(idNo)=>{
    const id =idNo
    console.log(id)
    const del = cart.find((item)=>(
        item.id===id && item.quantity <= 1 
    ))
    if(del){
     setCart((prevCart)=>
        prevCart.filter(item => item.id !== id )
     )
    }
    else{
        changeQuantity(id,-1)
    }


}

return (
  <div> 
  
  
    <p className=" text-4xl flex justify-center font-semibold ">My Cart </p>
    {cart.length ===0 ? (<div className=" flex justify-center flex-col">    <h1 className=" flex justify-center p-30 pb-5 justify-center text-2xl text-cyan-800 align-middle" >The cart is empty </h1>
    <div className=" flex justify-center pb-5">
    <MdAddShoppingCart className="w-10 h-10  " /></div>
    <h1 className=" flex justify-center pb-10 text-2xl text-cyan-800 align-middle " > Try to add some products and come again </h1></div>
    ) : <ul>{    
    cart.map((prod) => (
                <li className=" md:m-2 md:p-7 flex md:flex-row justify-center sm:p-3 sm:flex-col sm:items-center md:ml-70 lg:ml-0  " key={prod.id} >
                    <img  className="lg:w-50 lg:h-50 md:p-8 md:m-4 sm:w-25 sm:h-25 sm:p-3 sm:m-2 md:w-40 md:h-40" src ={`${prod.image}`}></img>
                    <div className=" md:pt-10 sm:p-5 sm:pl-60 md:pl-0" >
                    <h1 className=" md:text-2xl font-serif sm:text-xl align-middle md:flex-wrap   " >{
                        (prod.title).length <=25 ?prod.title :  
                            (prod.title).slice(0,25) + "..." }</h1>
                    <h1 className=" md:text-3xl m-2 ml-0 sm:text-2xl  "> Price :  ₹ {prod.price}</h1> 
                    <form onSubmit={(e)=> e.preventDefault()} >
                        <button  className="pl-2 pr-2 m-2 rounded-2xl border-2 align-middle bg-white text-black hover:bg-black hover:text-white" onClick={()=>changeQuantity(prod.id,-1) } > - </button>
                        {prod.quantity}    
                        <button className="pl-2 pr-2 m-2 rounded-2xl align-middle border-2 bg-white text-black hover:bg-black hover:text-white" onClick={()=>changeQuantity(prod.id,+1) } > + </button> 
                         <button className="pl-2 pr-2 m-2 align-middle " onClick={()=>handleDelete(prod.id)} ><MdDelete className="w-9 h-9 "/></button>   
                    </form>
                    <h1>---------------------------------------------------------------------------------------------------------------------------------</h1>
                    </div>           
                </li>
              
                   ) )
        
        }</ul> }
     <h1 className=" flex justify-center items-end  font-bold bg-green-300 p-3 text-amber-950 ">Total Price : ₹ {totalPrice}</h1>
    <h1 className=" font-serif text-2xl flex-wrap ">{}</h1>
    </div>
)
}
export default Cart
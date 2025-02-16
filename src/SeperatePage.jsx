import { useParams } from "react-router-dom"
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";


function SeperatePage ({items}){

const {id} = useParams();

const product = items.find((product)=>
    product.id === Number(id)

 )
 console.log(id)
 console.log(product)
 console.log(Number(id))


return(
    <>
    <Header/>
       <div className="flex  justify-center  flex-wrap  " >
    <img src={product.image}className=" md:w-50 md:h-50 sm:w-30 sm:h-30 xs:h-30 xs:w-40 xs:m-5  " ></img>
    <div className=" md:m-5 flex flex-col gap-2.5  p-4 rounded-3xl text-black shadow-2xl    "> 
        <h1 className=" font-serif md:text-2xl flex-wrap sm:text-2xl flex-wrap xs:text-xs  ">{product.title}</h1>
        <h1 className=" text-zinc-700 ">Ratings : {product.rating.rate}</h1>
        <h1>Customers Bought : {product.rating.count}</h1>
        <h1 className=" font-bold text-2xl xs:text-xl "> Price : ₹ {product.price}</h1>
    </div> 
   </div>
   <div className=" m-10 h-80  border-2  flex flex-col justify-center gap-2.5 p-7 border-2  text-black rounded-3xl xs:text-xl overflow-auto ">
    
   <h1 className=" font-serif text-2xl text-blue-900 xs:text-xl "> Category : <span className="  text-black">{product.category}</span></h1>
   <h1 className="font-serif text-2xl text-blue-900 xs:text-xl  "> Description :<span className=" text-black flex-wrap">{product.description}</span> </h1>
   <Link className=" absolute translate-x-1/2 translate-y-8/2 xs:absolute translate-x-1/3 translate-y-40 " to={`/cart/${product.id}`}>
    <button className=" w-50 h-10  rounded-3xl bg-amber-400  text-amber-50 font-sans shadow-xl xs:text-xs xs:w-40 ">Add to Cart</button>
    </Link>
   </div>
   
    </>
)    
}

export default SeperatePage
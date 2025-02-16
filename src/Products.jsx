import { Link } from 'react-router-dom';
import React, { useEffect } from "react";

function Products ({items,advertisement,setAdvertisement }) {


    useEffect(()=>{
       const arr=[	"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"]
        
       let i =0
       setInterval(()=>{
        setAdvertisement(arr[i])
        i +=1
        i>=arr.length ? i=0:i
       },10000)
       
       return ()=> clearInterval()

    },[])


    return(
    <>
     <div className="flex flex-wrap m-2 justify-center" >
      
     
     { 
           
           items.map((prod) => 
        <ul className=" flex flex-wrap justify-center items-center" key={prod.id}>
          
            
             
            <li key={prod.id} className=" flex flex-col  m-5 p-5 md:w-80 md:h-90 border-1 rounded-2xl justify-center items-center sm:w-60 sm:h-65 bg-white backdrop-blur-5xl shadow-lg xs:w-40 xs:m-3 xs:p-2  " >
            <Link  to = { `/${prod.id}`} >
                    <img src={prod.image} className="sm:w-25 sm:h-25 md:w-40 md:h-40 items-center p-4 m-3 xs:max-w-20 xs:max-h-20 xs:p-3 xs:m-3 " ></img>
                    <p className= " font-sans md:text-xl pl-4 pt-2 pb-2 sm:text-base xs:text-xs  " > {
                        (prod.title).length <=25 ?prod.title :  
                            (prod.title).slice(0,25) + "..." } 
                                                        
                    </p>
                    <p className= " font-bold md:text-2xl p-3 pb-2 sm:text-xl " >₹  {prod.price} </p>
            </Link>
            </li>        
           
           
        </ul>
    )}
    <div className=' flex sm:m-6 border-2 sm:p-10 rounded-4xl md:m-20 md:p-20 md:ml-5 lg:w-200 lg:h-150 justify-center flex-col bg-white shadow-2xl drop-shadow-lg backdrop-blur-3xl  xs:pt-6 xs:w-58 xs:h-38 '  >
        <h1 className=' flex justify-center text-3xl font-mono p-5 align-middle bg-blue-950 text-white rounded-4xl xs:text-sm '>Top DEals For u</h1>
        <img className='flex justify-center  sm:w-80 sm:h-70 align-middle md:w-130 md:h-120  lg:p-20 lg:pl-40 xs:w-30 h-30  ' src={advertisement} ></img>
      </div>  
     </div> 

    </>
)
}

export default Products
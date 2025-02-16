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
    <div className="flex flex-col items-center border-2 sm:m-6 sm:p-10 rounded-3xl md:m-20 md:p-20 md:ml-5 lg:w-[400px] lg:h-[300px] justify-center bg-white shadow-2xl drop-shadow-lg backdrop-blur-3xl sm:h-auto xs:pt-6 xs:w-[250px] xs:h-[250px] md:min-w-[320px]">
  <h1 className="text-center text-3xl font-mono p-5 bg-blue-950 text-white rounded-3xl xs:text-sm xs:p-2 md:text-2xl">
    Top Deals For You
  </h1>
  <img
    className="mx-auto sm:w-[200px] sm:h-[120px] md:w-[250px] md:h-[150px] lg:w-[300px] lg:h-[180px] xs:w-[120px] xs:h-[100px] p-5"
    src={advertisement}
    alt="Advertisement"
  />
      </div>  
     </div> 

    </>
)
}

export default Products
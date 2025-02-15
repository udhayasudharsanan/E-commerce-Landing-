import logo from "./assets/logo.jpg";
import { FaCartArrowDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


function  Header ({search , setSearch}) {

  return (
    <>
        <div className=" flex justify-center gap-2 static  ">
            <img src={logo} className=" h-22 w-22  " ></img>
            <form className=" p-4  " onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="search item "></label>
                <input className= "sm:w-50 md:w-68  bg-blue-50 p-4  rounded-full text-black  text-1.5xl  lg:w-130 pl-5    " 
                placeholder="Search here "
                type="text" value={search}
                onChange={(e)=>
                  {setSearch(e.target.value)}
                } />
            </form>
            <div className=" p-8 ">
              <Link to={`/cart/`} >
               <button className="pl-2.5"> <FaCartArrowDown  className=" h-7 w-7" />
               </button>
               </Link>
            </div>
            <div className=" p-8 ">
              <Link>
                <button className="pl-2.5" >
                <BsThreeDotsVertical className=" h-7 w-7" />
                </button>
              </Link>
            </div>
        </div>
    </>
  )
}
export default Header
import logo from "./assets/logo.jpg";
import { FaCartArrowDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


function  Header ({search , setSearch}) {

  return (
    <>
        <div className=" flex justify-center gap-2 static xs:gap-0  ">
            <img src={logo} className="xs:w-16 sm:h-20 sm:w-20 xs:h-15 md:mt-5  " ></img>
            <form className=" p-4 xs:pt-7  " onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="search item "></label>
                <input className= " xs:w-15 xs:p-2 xs:h-8 xs:text-xs  sm:w-50 md:w-68  bg-blue-50 sm:p-4  rounded-full text-black  text-1.5xl  lg:w-90 pl-5 md:text-xl md:m-3 md:p-5 " 
                placeholder="Search here "
                type="text" value={search}
                onChange={(e)=>
                  {setSearch(e.target.value)}
                } />
            </form>
            <div className=" p-8 xs:p-2 md:mt-5  ">
              <Link to={`/cart/`} >
               <button className="pl-2.5 xs:pl-1 "> <FaCartArrowDown  className=" h-7 w-7 xs:mt-4" />
               </button>
               </Link>
            </div>
            <div className=" p-8 xs:p-2 md:mt-5  ">
              <Link>
                <button className="pl-2.5 xs:mt-4" >
                <BsThreeDotsVertical className=" h-7 w-7" />
                </button>
              </Link>
            </div>
        </div>
    </>
  )
}
export default Header
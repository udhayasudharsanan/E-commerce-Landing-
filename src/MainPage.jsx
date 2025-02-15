import Header from "./Header"
import Products from "./Products"


function MainPage ({items,search,setSearch,advertisement,setAdvertisement}){


return(
    <>
        <Header 
        search={search}
        setSearch ={setSearch}

        />
        <Products
        items = {items}
        search={search}
        advertisement ={advertisement}
        setAdvertisement ={setAdvertisement}
         />        
    
    </>
)    
}

export default MainPage
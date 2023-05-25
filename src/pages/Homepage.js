import { Outlet } from "react-router-dom"
import SearchComponent from "../components/SearchComponent"
import ProductsListAndFilterComponent from "../components/ProductsListAndFilterComponent"
const Homepage=()=>{
    return(
        <main className="flex-1" > 
<div className="flex flex-col justify-between items-center ">
        <SearchComponent/>
        <ProductsListAndFilterComponent/>
        </div>   
        </main>
        
    )
}

export default Homepage
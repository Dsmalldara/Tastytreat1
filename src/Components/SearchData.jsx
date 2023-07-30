import { useState } from "react"
import { useEffect } from "react";
import { Shadow } from "./Popular";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Loader from "./Loader";
function SearchData() {
const apiKey ='9469c35b06824eacb58d084b2c7695af';
const [searchedData,setSearchedData] = useState([])
const [loading,setLoading] = useState(true)
const params = useParams();
 const onQuery = async (query) => {
  try {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=10`)
    const data = await api.json();
    setSearchedData(data.results)
    setLoading(false)
  }
  catch (error) {
    console.log(error)
  }
  finally{
    setLoading(false)
  }
}
useEffect(()=>{
    onQuery(params.search)
   setLoading(true)
},[params.search])
if(loading){
  return (
    <div>
      <Loader/>
    </div>
  )
}
  return (
    <div>
    <Categories/>
    <div className="flex flex-wrap justify-center items-center gap-4 pt-6 pl-3 pr-3 pb-6">
    {/* search input component */}
    {searchedData?.length > 0 ? (<>
    {searchedData && searchedData.map((dish)=>{
        return (
            <div className='flex flex-col justify-center items-center gap-4 max-w-[90%] ' key={dish.id}>
              <Link to={'/recipe/' +dish.id}>
              <div className="">
            <Shadow>
           <img src={dish.image} alt="" className='rounded-[2em] grayscale-0 ' />
        </Shadow>
           <p className='  overflow-wrap-normal  font-[raleway] text-sm md:text-1xl mt-1 cursor-pointer hover:text-slate-500 pl-2 md:max-w-[17rem] max-w-[65%] '>{dish.title}</p>
           </div>
              </Link>

                </div>)
               
                
                })
    }
    </>) : (<>
    <div className="flex flex-col items-center justify-center pt-10 mt-10 text-2xl font-extrabold">
    <p>Sorry, we could not find any recipes for {params.search}</p>
    <p>Try searching for something else.</p>
    </div>
    </>)}
    
    </div>
    </div>
  )
}

export default SearchData
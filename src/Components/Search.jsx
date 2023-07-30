import { SearchBox } from './props'
import { RiSearch2Fill } from 'react-icons/ri'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Search() {
     const onNavigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault()
        onNavigate(`/search/${search}`)
        console.log(search)
    }
    const [search, setSearch] = useState("")
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='justify-center items-center flex flex-col'>
                <h1 className='text-center font-playfair mt-4'>  Search for your Favourites food item and recipes      </h1>
            </div>
        <div className="flex  relative justify-center items-center pt-2 pb-4 mt-1">
        <SearchBox 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder=" ..noodles, rice, pizza, etc"
          type="text"
          style="mt-2   border border-gray-400 rounded-md p-2 pt-2 w-[17rem] transition-shadow duration-300 ease-in-out focus:shadow-lg ml-4 placeholder-gray-500 pl-5 pr-4 w-[100%] border border-gray-400 text-slate-900 rounded-md p-2 pt-0 w-96 bg-gray-200 border-e border-s outline-none"
        />
         {<RiSearch2Fill className=" text-3xl mt-2 cursor-pointer"/>}
      </div>

        </form>
    </div>
  )
}

export default Search
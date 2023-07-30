import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { v4 as uuidv4 } from 'uuid';
function Recipe() {
    const [recipe, setRecipe] = useState([])
     const [activeTab, setActiveTab] = useState('Instructions' )
     const [loading, setLoading] = useState(true)
   const [extended, setextended] = useState([])
     console.log(activeTab)
     console.log(extended)
    const param = useParams();
   const fetchDetails =async()=>{
    try{
      const fetchApi = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=9469c35b06824eacb58d084b2c7695af`)
      const getData = await fetchApi.json();
      const extendedIngredients = getData.extendedIngredients || [];
      setextended(extendedIngredients)
       setRecipe(getData)
      
       console.log(recipe)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
}
   useEffect(()=>{
    console.log(param.name)
    fetchDetails();
    setLoading(true)
   },[param.name])
   if(loading){
    return(
      <Loader/>
    )
   }
  return (
    <div className='pt-4 items-center pb-5 justify-center px-5  ml-3 md:ml-7 '>
    <div className='flex flex-col items-center justify-center gap-4'>
    <h1 className='text-2xl font-oswald font-black text-center pt-5'>{recipe.title}</h1>
    <img src={recipe.image} alt="" className='rounded-[2em] grayscale-0 border border-gray-700' />
    {/* <p className='text-justify text-sm md:text-1xl mt-1 cursor-pointer hover:text-slate-500 pl-2 md:max-w-[17rem] max-w-[65%] '>{recipe.summary}</p> */}
    </div>
    <div className='flex space-x-5 mt-4 justify-center pt-4 items-center '>
    <button
      className={`${activeTab=== 'Instructions' ? 'active' : ''} bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow`} onClick={()=>{setActiveTab('Instructions')}}>
      Instructions
    </button>
    <button
    onClick={()=>{setActiveTab('Ingredients')}}
     className={`${activeTab=== 'Ingredients' ? 'active' : ''} bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow`} >
      Get Ingredients
    </button>
   
    </div>
    <div className='pt-2 mt-7 pb-8 '>
    <div >
     
     {activeTab === 'Instructions' &&(
       <div>
         <div>
            <h1 className='font-bold text-black'>Description</h1>
         <h3 dangerouslySetInnerHTML={{__html:recipe.summary}} className='w-[90%] font-playfair md:text-1xl text-base overflow-wrap-normal'></h3>
         </div>
       <div className='mt-5'>
       <h1 className='font-bold text-black'>Instructions</h1>
         <h3 dangerouslySetInnerHTML={{__html:recipe.instructions}}  className=' font-raleway'></h3>
       </div>
       </div>
     )
     }

    
       {activeTab === 'Ingredients'  && (
        <div className=' ml-10'>
             {/* Use another map function to access 'original' property of each extended ingredient */}
        <div >
        <h1 className='font-bold text-black'>Ingredients</h1>
       {extended && extended.map((ing)=>{
        return (
            <ul  key={uuidv4()}>
                    <li className='font-oswald'>
                        {ing.original}
                    </li>
            </ul>
        )
       })}
       
      </div>
        </div>
       )}
    </div>
    </div>
    </div>
  )
}

export default Recipe;
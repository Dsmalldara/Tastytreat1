import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Styled from "styled-components"
import Categories from "./Categories"
import Loader from "./Loader"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
function Cusines() {
    const [dishes, setDishes] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams();
     

      const getCusines = async(cusineName)=>{
        try {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9469c35b06824eacb58d084b2c7695af&cuisine=${cusineName}&number=10`)
        const data = await api.json();
        console.log(data)
        setDishes(data.results)
        setLoading(false)
        console.log(dishes)
        }
         catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
        useEffect(()=>{
            getCusines(params.type);
            setLoading(true)
            console.log(params.type)
        },[params.type])
        
       if(loading){
        return (
        <div className='pt-6'>
        <Loader/>
        </div>)
       }

  return (
    
    < motion.div
    animate={{opacity:1 }}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:1}}
    >
        <Categories/>
     {dishes?.length > 0 ? (<>
        <div className="flex flex-wrap justify-center items-center gap-4 pt-6 pl-3 pr-3 pb-6">
            {dishes && dishes.map((dish)=>{
                // console.log(dish)
                return (
                    <div className='flex flex-col justify-center items-center gap-4 max-w-[90%]' key={dish.id}>
                
                    <Link to={'/recipe/' + dish.id} >
                    <Shadow>
                   <img src={dish.image} alt="" className='rounded-[2em] grayscale-0 ' />
                   </Shadow>
                   <p className='  overflow-wrap-normal  font-[raleway] text-sm md:text-1xl mt-1 cursor-pointer hover:text-slate-500 pl-2 md:max-w-[17rem] max-w-[65%] '>{dish.title}</p>
                    </Link>
                        </div>)
                       
                        
                        })}
                        </div></>)
                    :
                    (
                        <div className="flex flex-col items-center pt-8 mt-4 justify-center">
                            <h2 className="font-bold font-raleway text-2xl  text-center"> ohps..  No food item for {params.type}</h2>
                            </div>
                    )    
                    }
    </motion.div>
                
  )
}
const Shadow = Styled.div`
/* width:100%;
height:100%;
z-index:10; */
/* border:1px solid  transparent; */
/* background:linear-gradient(rgb(0,0,0,0),rgb(0,0,0,0.5));  */
`
export default Cusines;
import { useState } from 'react';
import { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import "@splidejs/splide/dist/css/splide.min.css"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Popular() {
    const [recipeAvail,setRecipeAvail] = useState([])
    const apiKey ='9469c35b06824eacb58d084b2c7695af';
  const getRecipe = async()=>{
     const check = localStorage.getItem('recipeAvail');
    if(check){
      setRecipeAvail(JSON.parse(check))
    }
else{  
  const api = await fetch(` https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=15`)
  const data = await api.json();
  localStorage.setItem('recipeAvail',JSON.stringify(data.recipes))
  setRecipeAvail(data.recipes);
  console.log(recipeAvail)
}      
    }
  useEffect(()=>{
  getRecipe();
  },[])
  
  return (
    <section id='popular'>

    <motion.div className='mr-[5%] ml-[5%]'
   animate={{opacity:1 }}
   initial={{opacity:0}}
   exit={{opacity:0}}
   transition={{duration:1}}
    >
    <div className='hidden md:flex'>
      <Shadow>
       <Wrapper>
      <h1 className='flex-col justify-center text-center pb-3 font-dancing font-black text-2xl'>Popular Picks</h1>
      
      <Splide options={{perPage:3, arrows:true, pagination:false,gap:"2rem",drag:'free'}}>
     
        { recipeAvail && recipeAvail.map((recipe)=>{
           return (
            
                <SplideSlide key={recipe.id}>
               <Link to={'/recipe/'+ recipe.id}>
               <Card>
                    <Dark>
                  
                <img src={recipe.image} alt={recipe.title} className='h-20 w-[20rem]   md:h-40 md:w-[28rem] '  />
                    </Dark>
                     <p className="text-black font-playfair text-1xl md:text-2xl pt-3 pl-3" >{recipe.title}</p>
                
                    </Card> 
               
               </Link>
                  </SplideSlide> 
                    
            
            )
        })}
     
        </Splide>
        </Wrapper>
        </Shadow>
        </div>
         {/* created another slider component for mobile so the mobile view would be better */}
        <div className='md:hidden flex'>
      <Shadow>
       <Wrapper>
      <h1 className='flex-col justify-center text-center pb-3 font-montserrat font-black text-2xl'>Popular Picks</h1>
      
      <Splide options={{perPage:2, arrows:false, pagination:false,gap:"2rem",drag:'free'}}>
     
        { recipeAvail && recipeAvail.map((recipe)=>{
           return (
                <SplideSlide key={recipe.id}>
               <Link to={'/recipe/'+ recipe.id}>
               <Card>
                    <Dark>
                  
                <img src={recipe.image} alt={recipe.title} className='h-26 w-[30rem]   pt-0 md:h-40 md:w-[28rem] ' />
                    </Dark>
                     <p className="text-black font-dancing text-1xl md:text-2xl pt-3 pl-3" >{recipe.title}</p>
                
                    </Card> 
               </Link>
                  </SplideSlide> 
            
            )
        })}
     
        </Splide>
        </Wrapper>
        </Shadow>
        </div>
    </motion.div>
    </section>
  )
}
const Wrapper = styled.div`
  margin:4rem  2rem  2rem;
  background-color: #736d6d;
  padding: 3rem 3rem 2rem 3rem  ;
  border-radius: 0.6rem;
`;
const Dark = styled.div`
width: 100%;
z-index: 10;

height:100%;
background: linear-gradient(rgba(0,0,0,0)rgba(0,0,0,0.5));
`
const Card = styled.div`
  border-radius: 2rem;
  /* min-height: 25rem; */
  padding-top: 2rem;
 
  overflow:hidden;
  img{
    border-radius: 2rem;
    /* width: 33rem;
    height: 18rem; */
  }
`;
export const Shadow = styled.div`
width: 100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0)rgba(0,0,0,0.6));
`
export default Popular;
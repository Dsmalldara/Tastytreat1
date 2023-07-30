import { useState, useEffect } from 'react'
import img1 from '../images/img1.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import { Shadow } from './Popular'
import { ImageHead } from './props'
function Header() {
  const Images = [img1, img3, img4, img5]
  const [imageRandom, setImageRandom] = useState("")
 
  useEffect(()=>{
      function getRandomImage(){
        const random = Math.floor(Math.random()* Images.length)
        const randomImage = Images[random]
        return randomImage;

      }  
      const toggleImage =()=>{
      setImageRandom(getRandomImage())
      }
      toggleImage()
  },[])

  return (

   <section id='header'>
         <div className='w-full z-[-3] h-full  flex  items-center  pb-5 gap-6 justify-around'>
      <div className='h-full opacity-70 w-[46%] md:w-[40%] '>
          <div  className='items-center justify-center py-7 mt-6 pb-3 mb-3  pl-4 bg-gradient-to text-go from-black to-transparent  flex flex-col left-[5%] md:left-[30%]'>
  <ImageHead style='text-center  font-bold pl-4 pr-4 pt-4 pb-7 text-3xl md:text-4xl font-[oswald]  text-bold text-black  shadow-lg my-2 overflow-wrap-normal  '  title={ <>
            Discover Flavorful Delights  With Tasty Treats!
            <br />
            <div className='h-6 mt-2'></div>
          <br />  Helping you  create a world of culinary delights  
        </>} /> 
  </div>
      </div>
     <div className='relative flex  justify-end ml-5  md:mr-1 mr-6 md:pl-4 pt-4'>
     <Shadow>
     <img src={imageRandom} alt=""  className='h-[80vh] pb-5 md:w-[35vw] w-[40vw] rounded-3xl blur-[0.9px]'/>
     </Shadow>
     </div>
    </div>
   </section>
  )
}

export default Header
import { useState } from 'react'
import { Props } from './props'
import {BiMenu} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
function Navbar() {
  const  [toggle, setToggle] = useState(false)
  function isToggle(){
    setToggle(!toggle);
  }
  return (
    <header className='border flex z-30 rounded-e rounded-s bg-slate-100  md:sticky md:top-0 sticky top-0'>
     <nav className=" flex  items-center justify-between w-full   py-3 md:space-x-12 space-x-2 md:px-12 px-4  pl-6  ">
        <div className='flex md:flex items-center justify-center h-13 w-16   cursor-pointer font-dancing text-2xl text-orange-400 pl-14 md:pl-4 z-50'>
          <a href="/"> <h2>Tastytreats</h2></a>
        </div>
        <div  className=''>
        <ul className=' gap-8 cursor-pointer text-3xl hidden md:flex '>
            <li className=' md:ml-3'>
                <Link to="Header" smooth={true} duration={1000} className='font-pacifico'>Home</Link>
            </li>
            <li className='pl-4 ml-3'>
            <Link to="popular" smooth={true} duration={1000} className=' pl-5 font-pacifico'>Popular Picks</Link>
            </li>
        </ul>
        </div>
        <div className='md:pl-16 hidden md:flex  md:pr-6 font-pacifico justify-around'>
          <Props title={<>Sign In</>} style=" rounded-full text-1xl px-4 py-1   md:text-2xl md:text-black text-white hover:text-black  md:hover:text-white  border bg-slate-900 md:hover:bg-slate-900 hover:bg-gray-200 md:bg-white min-w-[90px] min-h-[30px] font-[raleway] cursor-pointer "/>
        </div>
        <div className='md:hidden flex justify-items-end px-2'>
          <button onClick={isToggle} className=' flex md:hidden text-white bg-neutral-600 text-2xl outline-none px-1 py-1 z-40'>
         {toggle ? <MdCancel/> : <BiMenu/> }
          </button>
          <div className='flex md:hidden  justify-items-end pr-3 '>
         <motion.div  className={`${ toggle ? "flex" : 'hidden' }  z-100  bg-slate-600 text-3xl top-0 right-4 absolute w-[95%] h-[300px]  m-w-[360px] py-10 pl-20  pb-10  text-white text-[14px]    rounded-md`}
          animate={{opacity:1 }}
          initial={{opacity:0}}
          exit={{opacity:0}}
          transition={{duration:1}}
         >              <ul className='flex flex-col gap-10 font-bold font-oswald text-2xl  mt-4 pt-3'>
              <li>
              <Link to="header" smooth={true} duration={1000} className='font-playfair cursor-pointer mt-4'>Home</Link>

              </li>
              <li>
              <Link to="popular" smooth={true} duration={1000} className='font-playfair cursor-pointer mt-4'>Popular Picks</Link>
              </li>
            </ul>

         </motion.div>
         </div>

          </div>
    </nav>
   </header>
  )
}

export default Navbar



import { FaHeart, FaUtensils, FaHome } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FiInstagram, FiTwitter, FiTwitch, FiGithub } from 'react-icons/fi';
import { IoMdCompass } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SearchBox } from './props';
import Search from './Search';

const Footer = () => {
  return (
    <footer className="bg-slate-800 px-1 py-4 text-gray-300 ">
           <div className='w-[60%] flex flex-col justify-center items-center  ml-14 md:ml-2 '>
     <Search />
     </div>
   <div className=' flex justify-evenly items-center cur space-x-3  px-5  py-2 '>
       <div className=' list-none mt-4'>
        <h1 className='text-center justify-center text-black font-bold'>Services</h1>
        <ul className='text-center justify-center'>
        <li>Food recipes</li>
         <li>Nutrients</li>
         <li>Food descriptions</li>
        </ul>
       </div>
       <div className='list-none flex flex-col mr-2'>
        <h1  className='text-center justify-center text-black font-bold '>Company</h1>
        {/* <div className='text-sm md:text-base'> */}
        <span>About us</span>
        <span>Contact</span>
        <span>Press kit</span>
        {/* </div> */}
       </div>
       <div className=' space-x-3 py-1 list-none '>
        <h1  className='text-center justify-center ml-1 text-black font-bold'>Socials </h1>

     <span className='flex px-2 '>Instagram <FiInstagram className='ml-2'/></span>
        <span className='flex px-2'> Twitch <FiTwitch className='ml-2'/></span>
        <span className='flex px-2'>Twitter <FiTwitter className='ml-2'/></span>
       </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaSkiingNordic } from "react-icons/fa";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import Search from "./Search";
function  Categories () {
        return (
    <motion.div
    animate={{opacity:3 }}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:3}}
    >
      {/* search input component */}
        <Search/>
        <div className="flex flex-col items-center justify-center">
        <h1 className=" font-raleway text-center pt-2 mt-6">Various food for different Country men</h1>
        </div>
      <div className="flex items-center justify-center ml-4 gap-4 pt-6">
        <div>
      
         <NvLink to={'/cuisine/Italian'}> <FaPizzaSlice className="ml-3 mr-3 hover:text-neutral-800 ease-in-out  md:text-4xl px-2 py-2 text-4xl text-bold rounded-full bg-slate-500" />
          <p>Italian</p>
          </NvLink>
        </div>
        <div>
         <NvLink to={'/cuisine/American'}><FaHamburger className="ml-3 mr-3   ease-in-out text-4xl text-bold md:text-4xl bg-slate-500 px-2 py-2 rounded-full" />
           <p>American</p>
            </NvLink>
        </div>
        <div>
          <NvLink to={'/cuisine/Nordic'}>
          {/* <FaPersonSkiingNordic className="ml-3 mr-3  hover:text-neutral-800 ease-in-out  px-2 py-2 text-4xl text-bold rounded-full bg-slate-500"/> */}
          <FaSkiingNordic className="ml-3 mr-3   ease-in-out  px-2 py-2 text-4xl text-bold rounded-full bg-slate-500"/>
          <p>Nordics</p>
          </NvLink>
        </div>
        <div>

         <NvLink to={'/cuisine/British'}> <GiNoodles className="ml-3 mr-3   ease-in-out  px-2 py-2 text-4xl text-bold rounded-full bg-slate-500" /> 
          <p className="text-center justify-center">British</p>
          </NvLink>
        </div>
        <div className="px-3">
          <NvLink  to={'/cuisine/Thai'}><GiChopsticks className=" mr-3   px-2 py-2 text-4xl text-bold rounded-full bg-slate-500   ease-in-out" />
          <p>Thai</p>
          </NvLink>
          </div>

      </div>
    </motion.div>
  );
}
// styling the navlink
const NvLink = styled(NavLink)`
 position: relative;
  cursor: pointer;
  svg{
    color:white;
  }
  p{
    cursor: pointer;
  }
  p:hover{
color:goldenrod;
  }
  &.active{
 
   svg{
    background: linear-gradient(to right, #f27121, #e94057);
   }
   p{
    position: absolute;

    bottom: 0;
    content: " ";
    height: 6px;
    color: #191918;
    width: 80%;
   }
}
`

export default Categories;

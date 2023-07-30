import Popular from '../Components/Popular'
import Header from '../Components/Header'
import { motion } from 'framer-motion'
import Categories from '../Components/Categories'
Header
function Homepage() {
  return (
    <motion.div
    animate={{opacity:3 }}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:3}}
    >
    
        <Header/>
        <Categories/>
        <Popular/>
    </motion.div>
  )
}
export default Homepage;
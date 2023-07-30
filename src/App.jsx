import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import  Navbar from './Components/Navbar'
import Cusines from './Components/Cusines'
import SearchData from './Components/SearchData'
import Recipe from './Components/Recipe'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
 
     <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/cuisine/:type" element={<Cusines/>}/>
        <Route path="*" element={<h1 className='flex flex-col items-center justify-center pt-10 mt-10 text-2xl font-extrabold'>404 not found</h1>}/>
        <Route path="/search/:search" element={<SearchData/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
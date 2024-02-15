//Styling
import './App.css'
//Packages
import {BrowserRouter , Routes , Route} from "react-router-dom"
import { useEffect, useState } from 'react'

// Pages
import Home from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import Categories from './pages/Categories/Categories';
import { AllProducts } from './pages/All Products/AllProducts';
import { NewProducts } from './pages/New Products/NewProducts';
import { ItemManager } from './pages/Admin/Item Manager/ItemManager';
import { ItemPage } from './pages/Item Page/ItemPage';

// Interfaces
import { Product } from './components/Home/MpFigures/MPFigures';

// Functions
import { getProducts } from './pages/Admin/Item Manager/ItemManager';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState<boolean>(localStorage.getItem("logged-user-data") ? true : false) // Check if user logged in or not
  const [screenWidth,setScreenWidth] = useState<number>(window.innerWidth) // Getting current screen width everytime user changes
  const [language,setLanguage] = useState<string>("english")
  const [selectedProduct,setSelectedProduct] = useState<Product>()
  const [products,setProducts] = useState<Product[]>([])

  useEffect(()=>{
    console.log(screenWidth)
  },[screenWidth])

  useEffect(()=>{
    getProducts(setProducts)
  },[])

  window.addEventListener('resize',()=>{
    setScreenWidth(window.innerWidth)  // Updating screen width
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home {...{isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct}} />} />
        <Route path='/item' element={selectedProduct ? <ItemPage {...{isLoggedIn,setIsLoggedIn,selectedProduct,setSelectedProduct}} /> : ""} />
        <Route path='/all' element={<AllProducts {...{isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct,products}} />} />
        <Route path='/categories' element={<Categories {...{isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct}} />} />
        <Route path='/news' element={<NewProducts {...{isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct,products}} />} />
        <Route path='/register' element={<Register  {...{isLoggedIn,setIsLoggedIn}} />} />
        <Route path='/login' element={<Login  {...{isLoggedIn,setIsLoggedIn}} />} />
        <Route path='/admin' >
          <Route path='itemManager' element={<ItemManager {...{screenWidth,setSelectedProduct}} />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Styling
import { HomeContainer } from "./Home.style"
// Components
import Navbar from "../../components/Global/Navbar/Navbar"
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner"
import Brands from "../../components/Global/Brand/Brands"
import MPFigures from "../../components/Home/MpFigures/MPFigures"
import { FigureCartContainer } from "../../components/Global/Figure Cart Contanier/FigureCartContainer"
// Packages
import { useEffect, useRef, useState } from "react"
import Footer from "../../components/Global/Footer/Footer"
// Interfaces
import { Product } from "../../components/Home/MpFigures/MPFigures"
// Functions 
import { getProducts } from "../Admin/Item Manager/ItemManager"

interface HomeProps{
  isLoggedIn : boolean;
  setIsLoggedIn : (data : boolean)=> void;
  screenWidth : number;
  setSelectedProduct : (product : Product)=> void
}

const Home = ({isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct} : HomeProps)=> {

  const [products,setProducts] = useState<Product[]>([])
  const mpFiguresConRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    getProducts(setProducts)
  },[])

  const handleScrollNext = ()=> {
    if(mpFiguresConRef && mpFiguresConRef.current) mpFiguresConRef.current.scrollTo({
      left : 100,
      behavior : "smooth"
    })
  }

  return (
      <HomeContainer>
        <div className="home-components">
          <Navbar {...{isLoggedIn,setIsLoggedIn}} />
          <HomeBanner />
          <FigureCartContainer {...{products : products.slice(0,10) ,screenWidth,setSelectedProduct}} />
          <FigureCartContainer {...{products : products.slice(10,20) ,screenWidth,setSelectedProduct}} />
          <div className="title-container">
            <h1>Brands</h1>
          </div>
          <Brands />
        </div>
        <Footer />
      </HomeContainer>
  )
}

export default Home
// Styling
import { CategoriesContainer } from "./Categories.style"
// Components
import Navbar from "../../components/Global/Navbar/Navbar"
import HomeBanner from "../../components/Home/HomeBanner/HomeBanner"
import Brands from "../../components/Global/Brand/Brands"
import MPFigures from "../../components/Home/MpFigures/MPFigures"
// Packages
import Footer from "../../components/Global/Footer/Footer"

interface CategoriesProps{
  isLoggedIn : boolean,
  setIsLoggedIn : (data : boolean)=> void,
  screenWidth : number
}

const Categories = ({isLoggedIn,setIsLoggedIn,screenWidth} : CategoriesProps)=> {

  return (
      <CategoriesContainer>
        <div className="categories-components">
          <Navbar {...{isLoggedIn,setIsLoggedIn}} />
          <div className="title-container">
            <h1>Categories</h1>
          </div>
          <Brands />
          <Brands />
          <Brands />
        </div>
        <Footer />
      </CategoriesContainer>
  )
}

export default Categories
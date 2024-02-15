// Styling
import { NewProductsContainer } from "./NewProducts.style";
// Components
import Navbar from "../../components/Global/Navbar/Navbar";
import MPFigures from "../../components/Home/MpFigures/MPFigures";
import Brands from "../../components/Global/Brand/Brands";
import Footer from "../../components/Global/Footer/Footer";
// Interfaces
import { Product } from "../../components/Home/MpFigures/MPFigures";
import { RefObject } from "react";

interface NewProductsProps {
    isLoggedIn : boolean;
    setIsLoggedIn : (data: boolean)=>void;
    screenWidth : number;
    setSelectedProduct : (product : Product)=>void;
    products : Product[];
    mpFiguresConRef ?: RefObject<HTMLDivElement>
}

export const NewProducts = ({isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct,products,mpFiguresConRef} : NewProductsProps) => {

  return (
    <NewProductsContainer>
        <div className="new-products-components">
          <Navbar {...{isLoggedIn,setIsLoggedIn}} />
          <div className="title-container">
            <h1>New Products</h1>
          </div>
          <MPFigures {...{screenWidth,setSelectedProduct,products,mpFiguresConRef}} />
        </div>
        <Footer />
    </NewProductsContainer>
  )
}

// Styling
import { AllProductsContainer } from "./AllProducts.style";
// Components
import MPFigures from "../../components/Home/MpFigures/MPFigures";
import Brands from "../../components/Global/Brand/Brands";
import Footer from "../../components/Global/Footer/Footer";
import Navbar from "../../components/Global/Navbar/Navbar";
// Interfaces
import { Product } from "../../components/Home/MpFigures/MPFigures";
import { RefObject } from "react";

interface AllProductsProps {
    isLoggedIn : boolean;
    setIsLoggedIn : (data : boolean)=>void;
    screenWidth : number;
    setSelectedProduct : (product : Product)=>void;
    products : Product[];
    mpFiguresConRef ?: RefObject<HTMLDivElement>
}

export const AllProducts = ({isLoggedIn,setIsLoggedIn,screenWidth,setSelectedProduct,products,mpFiguresConRef} : AllProductsProps) => {

  return (
    <AllProductsContainer>
        <div className="all-products-components">
            <Navbar {...{isLoggedIn,setIsLoggedIn}} />
            <div className="title-container">
                <h1>All Products</h1>
            </div>
            <MPFigures {...{screenWidth,setSelectedProduct,products,mpFiguresConRef}} />
        </div>
        <Footer />
    </AllProductsContainer>
  )
}

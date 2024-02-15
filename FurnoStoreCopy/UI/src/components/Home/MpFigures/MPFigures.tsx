
// React
import { RefObject, useEffect, useRef, useState } from "react"
// Styling
import { MPFiguresContainer } from "./MpFigures.style"
import CartLogo from "../../../assests/cart/cartPhoto1.jpg"
// Components
import { Cart } from "../../Global/Cart/Cart"
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id : string,
  photo : string,
  title : string,
  text : string,
  price : string,
  discounted_price : string,
  isAdmin : boolean
}

interface MPFiguresProps {
  screenWidth : number;
  setSelectedProduct : (product : Product)=>void;
  products : Product[];
  mpFiguresConRef ?: RefObject<HTMLDivElement>
}

const MPFigures = ({screenWidth,setSelectedProduct,products,mpFiguresConRef} : MPFiguresProps) => {

  const [productsData,setProductsData] = useState<Product[]>(products)

  useEffect(()=>{
    setProductsData(products)
  },[products])

  return (
    <MPFiguresContainer ref={mpFiguresConRef} {...{screenWidth}} >
      <div className="most-popular-container">
        <div className="products">
          {productsData.map((product : Product)=>{
            return (<Cart {...{...product,screenWidth,setSelectedProduct}} />)
          })}
        </div>
      </div>
    </MPFiguresContainer>
  )
}

export default MPFigures

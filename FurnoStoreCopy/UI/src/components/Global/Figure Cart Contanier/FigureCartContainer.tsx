// Icons
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
//  Styling
import { FigureCartContainerCon } from "./FigureCartContainer.style";
// Components , Interfaces
import MPFigures, { Product } from "../../Home/MpFigures/MPFigures";
// Packages
import { useEffect, useRef, useState } from "react";

interface FigureCartContainerProps {
    screenWidth : number;
    setSelectedProduct : (data : Product)=> void;
    products : Product[]
}

export const FigureCartContainer = ({products,screenWidth,setSelectedProduct} : FigureCartContainerProps) => {

    const [xScroll,setXScroll] = useState<number>(0)
    const mpFiguresConRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        console.log(xScroll)
    },[xScroll])

    const handleScrollNext = ()=>{
  

            if (xScroll <2460) {
                setXScroll(x=>x+410)
            }
  
    }

    const handleScrollPrev = ()=>{


            if (xScroll >0) {
                console.log('naber')
                setXScroll(x=>x-410)
            }

    }

    useEffect(()=>{
        if(mpFiguresConRef && mpFiguresConRef.current) mpFiguresConRef.current.scrollTo({left : xScroll,behavior : "smooth"})
    },[xScroll])

  return (
    <FigureCartContainerCon >
        <div className="title-container">
            <h1>New Products</h1>
        </div>
        <button className="scroll-previous-button" onClick={handleScrollPrev} ><FaAngleLeft /></button>
        <button className="scroll-next-button" onClick={handleScrollNext} ><FaAngleRight /></button>
        <MPFigures {...{screenWidth,setSelectedProduct,mpFiguresConRef,products : products.slice(0,10)}} />
    </FigureCartContainerCon>
  )
}


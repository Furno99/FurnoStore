// Styling
import { ItemPageContainer } from "./ItemPage.style"
import { FaAngleDown } from "react-icons/fa6"
// Packages
import { ReactNode, useEffect, useState } from "react"
import Footer from "../../components/Global/Footer/Footer"
// Interfaces
import { Product } from "../../components/Home/MpFigures/MPFigures"
// Functions 
import { getProducts } from "../Admin/Item Manager/ItemManager"
// Components 
import Navbar from "../../components/Global/Navbar/Navbar"

interface ItemPageProps {
  isLoggedIn : boolean;
  setIsLoggedIn : (data : boolean)=> void
  selectedProduct : Product
}

export const ItemPage = ( {isLoggedIn,setIsLoggedIn,selectedProduct} : ItemPageProps) => {

  const [amount,setAmount] = useState<number>(1)
  const [isClicked,setIsClicked] = useState<boolean>(false)
  const [amountArray,setAmountArray] = useState<ReactNode[]>(new Array(10).fill(1))

  return (
    <ItemPageContainer onClick={()=>isClicked ? setIsClicked(false) : ""} >
      <Navbar {...{isLoggedIn,setIsLoggedIn}} />
      <div className="item-container">
        <div className="item-image-container">
          <img src={selectedProduct?.photo} alt="" />
        </div>
        <div className="item-details-container">
          <div className="title">
            <h1>{selectedProduct?.title}</h1>
            <div className="text">
              <h3>{selectedProduct?.text}</h3>
            </div>
          </div>
          <div className="price-button-container">
            <div className="price-container">
              <p style={selectedProduct?.discounted_price ? {textDecoration : "line-through",opacity : "80%"} : {}} >{selectedProduct?.price ? +selectedProduct.price * amount : ""}€</p>
              <p>{selectedProduct?.discounted_price ? +selectedProduct.discounted_price * amount : ""}€</p>
            </div>
            <div className="button-container">
              <div className="amount-container">
                <div className="amount-buttons">
                  <button className="amount-button" 
                    onClick={()=>setIsClicked(oV=>!oV)}
                  >
                    Amount : {amount}<FaAngleDown />
                  </button>
                    {isClicked ? (<>
                      {amountArray.map((d,index)=>{
                        return (
                          <button onClick={()=>{{
                            setAmount(index+1)
                            setIsClicked(false)
                          }}} className="option-button" >Amount : {index+1}</button>
                        )
                      })}
                    </>)
                    :
                    (<></>)  
                    }
                </div>
              </div>
              <button className="add-to-cart-button" >Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="item-bottom-container">
        <div className="item-details-container">
          <div className="title">
            <h1>Item Details</h1>
          </div>
          <div className="line" />
          <div className="text">
            <h2>{selectedProduct?.title}</h2>
            <p>{selectedProduct?.text}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Error voluptatum nulla minus reiciendis exercitationem nostrum laboriosam dolores consequuntur similique
              ? Accusantium esse nulla aliquam?</p>
          </div>
        </div>
        <div className="comments-container">
          <div className="title">
            <h1>Comments</h1>
          </div>
          <div className="line" />
          <div className="inner-comments-container">

          </div>
        </div>
        <div className="payment-details-container">
          <div className="title">
              <h1>Payment Options</h1>
            </div>
            <div className="line" />
          </div>
      </div>
      <Footer />
    </ItemPageContainer>
  )
}


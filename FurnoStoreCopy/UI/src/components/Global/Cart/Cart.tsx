// Styling
import { CartContainer } from "./CartContainer.style"
// Components
import { Product } from "../../Home/MpFigures/MPFigures"
// Icons
import heart from "../../../assests/cart/heart-solid.svg"
// Packages
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartProps extends Product {
  handleRemove ?: (title : string )=> void;
  screenWidth : number;
  setSelectedProduct : (data : Product)=> void
}

export const Cart = ( {id,photo,title,text,price,discounted_price,isAdmin,handleRemove,screenWidth,setSelectedProduct} : CartProps) => {

  const [cartWidth,setCartWidth] = useState<number>(375)

  const navigate = useNavigate()


  
  return (
    <CartContainer {...{cartWidth}} isDiscounted={discounted_price ? true : false} >
      {photo ? <img onClick={()=>{
        setSelectedProduct({id,photo,title,text,price,discounted_price,isAdmin})
        navigate("/item")
        window.scrollTo({top : 0})
      }
        } 
        className="product-photo"
        src={photo} alt="product photo" 
      />
       : 
      <h1 className="no-image-text" >No Image</h1> }
      <div className="middle-bottom-container">
        <div className="cart-middle-container">
          <div className="text-container">
            <div className="text">
              <h3>{title}</h3>
            </div>
            <div className="price-container">
              {discounted_price ? (<p className="discounted-price" >{discounted_price}</p>) : ""}
              <p className="original-price" >{price}</p>
            </div>
          </div>
          <div className="like-container">
            <img src={heart} alt="heart-icon" />
          </div>
        </div>
        <div className="cart-bottom-container">
          <button>Add to Cart</button>
          {isAdmin ? <button onClick={()=>{
            if(handleRemove) handleRemove(id)
          }} >Remove</button> : ""}
        </div>
      </div>
    </CartContainer>
  )
}


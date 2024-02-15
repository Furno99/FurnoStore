
import styled from "styled-components";

export interface CartContainerProps {
    cartWidth : number;
    isDiscounted : boolean
}

export const CartContainer = styled.div<CartContainerProps>`
    width: ${({cartWidth})=>`${cartWidth}px`};
    min-width : 375px;
    background-color: #F8F8F8;;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    min-width: 180px;
    min-height: 290px;
    border : 1px solid gray;
    height: 5800px;
    max-height: 600px;

    .product-photo {
        border-radius : 0.9rem 0.9rem 0 0;
        height: 400px;
        min-height: 400px;
        max-height: 400px;
        object-fit: cover;
        cursor : pointer;
    }

    .no-image-text{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 400px;
        min-height: 400px;
        max-height: 400px;
        margin: 0;
        cursor: default;
    }

    .middle-bottom-container {
        padding :  5%;    
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 200px;
        box-sizing: border-box;

        .cart-middle-container{
        display: flex;
        height : auto;
        align-items: center;

        .text-container {   
            width: 75%;
            height: 100px;
            display : flex;
            flex-direction : column;
          
            .price-container {
                display: flex;
                gap : 1rem;
                align-items: center;

                .original-price {
                    font-size: 15px;
                    text-decoration: ${({isDiscounted})=>isDiscounted ? "line-through" : "none"} ;
                    opacity: ${({isDiscounted})=>isDiscounted ? "50%" : "100%"} ;
                }

            }
            
        }

        .like-container {
            width: 25%;
            height: 100px;
            display: flex;
 
            justify-content: center;

            img {
                height: 50px ;
            }
        }

    }

    .cart-bottom-container {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            cursor: pointer;
            background-color: red;
            color: white;
            font-weight: bolder;
            border: none;
            width: 100%;
            height: 80%;
            border-radius: 0.4rem;
            padding: 3% 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    }

@media screen and (max-height : 1050px) or (max-width : 2150px)  {
    font-size: 80%;
}    

`



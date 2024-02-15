
import styled from "styled-components";

interface MPFiguresContainerProps {
    screenWidth : number
}

export const MPFiguresContainer = styled.div<MPFiguresContainerProps>`
    min-width: 85%;
    width: 85%;
    max-width: 85%;
    height: auto;
    margin-bottom: 20px;
    gap : 20px;
    overflow-x: hidden;
    position: relative;

    .scroll-next-button {
        position: absolute;
        left : 0;
        top : 0;
    }
    .scroll-previous-button{
        position: absolute;
        left : 10px;
        top : 10px;
    }
    .most-popular-container , .new-products-container {
        width: ${({screenWidth})=>screenWidth >= 1850 ? "250%" : screenWidth >= 1550 ? "350%" :  screenWidth >= 1380 ?  "500%" : "1000%"  } ;
        .products {
            display: flex;
            justify-content: space-around;
        }
    }

`

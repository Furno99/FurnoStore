
import styled from "styled-components";

export const FigureCartContainerCon = styled.div`
    display : flex;
    flex-direction :column;
    width: 100%;
    align-items: center;
    position: relative;

    .title-container {
        width: 85vw;
        font-size: 23px;
        box-sizing: border-box;
    }

    .popular-figures-title {
        width: 68%
    }

    
    .scroll-previous-button {
        position: absolute;
        top : 50%;
        left : 4%;
        display : flex;
        align-items : center;
        justify-content: center;
        background-color: red;
        color : white;
        border : none;
        padding : 20px;
        border-radius: 50px;
        cursor: pointer;
    }

    .scroll-next-button {
        position: absolute;
        z-index: 1;
        right : 5%;
        top : 50%;
        display : flex;
        align-items : center;
        justify-content: center;
        background-color: red;
        color : white;
        border : none;
        padding : 20px;
        border-radius: 50px;
        cursor: pointer;
    }

`

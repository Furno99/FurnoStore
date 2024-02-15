
import styled from "styled-components";

export const HomeBannerContainer = styled.div`
    width: 85%;
    max-height: 200px;
    min-height: 200px;
    border-radius: 12px;
    margin : 40px 0 20px 0;
    display : flex;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 0 5px 8px 5px gray;
    background-color: white;

    .title-container {
        max-width : 40%;
        display: flex;
        justify-content: center;
        position: relative;
        white-space: nowrap;

        @media screen and (max-width : 1600x ) {
            width: 100%;
            max-width: 100% !important;
        }

        h1 {
            margin : 0;
            font-size : 57px;
            font-weight: 700;
        }

        .title1{
            position: absolute;
            left: 100px;
            top: 30px;
        }

        .title2{
            position: absolute;
            left: 100px;
            top: 80px;
        }

        }



    .image-container {
        width: 35%;
        position: relative;

        img {
            position: absolute;
            height: 100%;
        }

        .image1 {
            left : 50px 
        }

        
        .image2 {
            left : 165px;
        }

        
        .image3 {
            left : 200px;
        }

        
        .image4 {  
            left : 290px;
        }

    }

    .design-container{
        width: 35%;
        position: relative;
        overflow: hidden;
        border-radius: 20px;

        @media screen and (max-width : 1600px ) {
            display : none;
        }

        .style-ball-1{
            background-color: red;
            height: 300px;
            width: 300px;
            border-radius: 100%;
            position: absolute;
            top: -150px;
            right : 165px;
            border : 2px solid black;
            z-index: 2;

            .inner-container {
                height: 100%;
                width: 100%;
                border-radius: 100%;
                transform: rotate(45deg);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

                .top-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: end;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

                .middle-container {
                    height: 33.3%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .ball {
                        height: 30px;
                        width: 30px;
                        border-radius: 100%;
                        background-color: white;
                    }
                }

                .bottom-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: start;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

            }

        }

        .style-ball-2{
            background-color: red;
            height: 300px;
            width: 300px;
            border-radius: 100%;
            position: absolute;
            top: -150px;
            right : -60px;

            .inner-container {
                height: 100%;
                width: 100%;
                border-radius: 100%;
                transform: rotate(45deg);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                
                .top-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: end;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

                .middle-container {
                    height: 33.3%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .ball {
                        height: 30px;
                        width: 30px;
                        border-radius: 100%;
                        background-color: white;
                    }
                }

                .bottom-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: start;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

            }

        }

        .style-ball-3{
            background-color: red;
            height: 300px;
            width: 300px;
            border-radius: 100%;
            position: absolute;
            right : -40px;
            bottom : -170px;
            z-index: 0;

            .inner-container {
                height: 100%;
                width: 100%;
                border-radius: 100%;
                transform: rotate(45deg);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                
                .top-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: end;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

                .middle-container {
                    height: 33.3%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .ball {
                        height: 30px;
                        width: 30px;
                        border-radius: 100%;
                        background-color: white;
                    }
                }

                .bottom-container {
                    height: 33.3%;
                    width: 80%;
                    display: flex;
                    align-items: start;
                    justify-content: space-between;

                    .item {
                        height : 30px;
                        width: 100px;
                        background-color: white;
                        border-radius: 40px;
                    }
                }

            }

        }

    }

`

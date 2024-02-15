
import styled from "styled-components";

export const ItemPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    //background-color: yellow;
    display: flex;
    flex-direction: column;
    gap : 40px;
    align-items: center;

    .item-container{
        display: flex;
        justify-content: space-around;
        background-color: red;
        color : white;
        height: 800px;

        .item-image-container {
            background-color: red;
            img {
                height: 800px;
                max-height: 800px;
                width: 600px;
                object-fit: cover;
            }
        }

        .item-details-container {
            height: 800px;
            //background-color: blue;
            width: 800px;
            box-sizing: border-box;
            padding: 20px;
            
            .title {

                h1{
                    font-size: 40px;
                }

                .text {
                    h3 {
                        font-size: 25px;
                    }
                }

            }

            .price-button-container {
                display : flex;
                justify-content: space-between;
                align-items: center;

                .price-container {
                    display : flex;
                    gap : 20px;
                    p {
                        font-size: 25px;
                        font-weight: bold;
                    }

                }

                .button-container {
                    display : flex;
                    align-items: center;
                    gap : 20px;
                    position: relative;

                    .amount-container {
                        position: relative;
                        background-color: yellow;
                        display: flex;
                        flex-direction : column;
                        right : 150px;
                        bottom : 15px;

                        .amount-buttons {
                            position: absolute;

                            .amount-button {
                                background-color: red;
                                color : white;
                                border-radius: 4px;
                                width: 160px;
                                word-wrap: break-word;
                                font-size: 20px;
                                font-weight: bold;
                                cursor: pointer;
                                display : flex;
                                align-items: center;
                                justify-content: center;
                                gap : 5px;

                                svg {
                                    font-size: 15px;
                                }

                            }

                            .option-button {
                                width: 160px;
                                font-size: 20px;
                                font-weight: bold;
                                cursor: pointer; 
                            }
                        }

                    }

                    .add-to-cart-button {
                        background-color: red;
                        color : white;
                        border-radius: 4px;
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                    }

                }
                
            }

        }

    }

    .item-bottom-container {
        background-color: red;
        width: 1400px;
        min-height: 1200px;
        box-sizing: border-box;
        padding: 40px;
        color : white;

        .title {
            h1 {
                color : white;
                text-align: center;
                margin-bottom : 10px;
            }
        }
        .line {
            height: 1px;
            width: 100%;
            background-color: white;
        }
        .text {
            color : white
        }

        .item-details-container {

        }

        .comments-container{
            .inner-comments-container {
                margin-top : 20px;
                width: 100%;
                background-color: white;
                height: 400px;
                overflow: auto;
            }
        }

    }

`

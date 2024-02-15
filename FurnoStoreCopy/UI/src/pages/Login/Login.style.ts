import styled from "styled-components";

export const LoginContainer = styled.div`
    display : flex;
    max-height: 100vh;
    overflow-y: hidden;

    .background-container {
        img {
            width: auto;
            height: 100vh;
        }
    }

    .login-container {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        //background-color: yellow;
        overflow-y: scroll;

        .inner-container{
            //background-color: green;
            padding: 0 10%;
            width: 50%;
            display : flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;

            .title-container{
                display: flex;
                flex-direction : column;
                align-items: center;
                
                h1 {
                    font-size: 40px;
                    margin: 0;
                }

            }

            .form-container {
                display : flex;
                flex-direction: column;
                align-items: center;
                width: 80%;

                .inner-title-container {
                    display: block;
                    width: 100%;
                }

                input {
                    width: 100%;
                    outline: none;
                    border : 1px solid gray;
                    border-radius: 10px;
                    padding : 8px 5px;
                    margin : 5px 0;
                    box-sizing: border-box;
                }
                button {
                    width: 100%;
                    background-color: red;
                    color: white;
                    font-weight: bold;
                    border: none;
                    border-radius: 10px;
                    padding: 10px 0 ;
                    margin : 20px 0 10px 0;
                    cursor: pointer;
                }

                a {
                    text-decoration: none;
                    color: blue;
                }

            }

        }
    }

`

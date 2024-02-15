import styled from "styled-components"

interface NavbarInterface {
    isFocused : boolean
}

export const NavbarContainer = styled.div<NavbarInterface>`
    height: 3.5rem;
    width: 85%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    color: white;
    margin-top: 1.5%;
    box-sizing: border-box;
    border-radius: 30px;
    color: #e6e5e3;
   

    .left-container {
        display : flex;
        align-items: center;
        //background-color: green;
        width: 35%;

        .menu {
            background-color: red;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 0 20px 0 40px;
            gap: 5px;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            border: 3px solid transparent;
            transition: 0.5s ease-in-out;
            box-sizing: border-box;
            font-weight: bold;
            transition: 0.5s ease-in-out;

            &:hover {
                border : 3px solid white;
                color : white;
            }

            svg {
                font-size: 20px;
                opacity: 100%;
            }
        }

        .logo-container {
            height: 100px;
            width: 100px;
            background-color: white;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1%;
            margin: 0 5%;
            img {                
                height: 80%;
            }
        }

        .search-input {
            height: 100%;
            width: 100%;
            display: flex;
            border: ${props => (props.isFocused ? '5px solid orange' : '5px solid transparent')};
            border-radius : 16px;
            transition: 0.5s ease-in-out;


            form {
                display: flex;
                align-items: center;
      
                       
                input {
                    width: 100%;
                    height: 50%;
                    border: none;
                    padding-left: 100px;
                    box-sizing: border-box;
                    padding-left: 10px;   
                    border-top-left-radius : 10px ;
                    border-bottom-left-radius : 10px ;
                    outline: none;
                }
                svg {
                    background-color: white;
                    color: black;
                    height: 50%;
                    padding : 0 10px;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    cursor: pointer;
                }
            }
            
        }

    }

    .middle-container {
        width: 30%;
        
        ul {
            list-style: none;
            display: flex;
            gap : 10%;
            
            li {
                a {
                    text-decoration: none;
                    color : white;
                }
            }

        }
    }

    .right-container {
        //background-color: green;
        width: 25%;
        border-bottom-right-radius: 30px;
        border-top-right-radius : 30px;
        display: flex;
        flex-direction: row-reverse;

        .user-logo-container{
            //background-color: purple;
            display: flex;
            gap : 1rem;
            align-items: center;
            padding-right: 5%;

            .login-container , .register-container {
                height: 100%;
                display: flex;
                align-items: center;
                gap : 0.3rem;
                font-weight: bold;
                transition: 0.5s ease-in-out;
                cursor: pointer;
       

                &:hover a {
                    color: white;     
                }

                a{
                transition: 0.5s ease-in-out;
                text-decoration: none;
                color: #e6e5e3;
                }

                svg {
                    font-size: 25px;
                }

            }   

        }

        .language-container{
            display: flex;
            align-items: center;
            border: 2px solid transparent;
            transition: 0.5s ease-in-out;
            padding: 0 15px 0 10px;

            &:hover {
                border : 2px solid white;
            }

            button {
                background-color: transparent;
                color: white;
                border: none;
                font-weight: bold;
                font-size: 16px;
                margin: 0;
                display : flex;
                align-items: center;
                cursor: pointer;

                svg{
                    font-size: 25px;
                }

            }

            

        }

    }

`

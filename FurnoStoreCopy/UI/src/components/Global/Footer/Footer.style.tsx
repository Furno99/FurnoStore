
import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: red;
    width: 100%;
    height: 230px;
    display : grid;
    grid-template-columns: 50% 50%;
    

    .footer-left {
        width: 100%;
        font-size: 14px;

        ul {
            display: flex;
            list-style: none;
            color :white;
            gap : 13%;
        
            li {
   
                .name-1 {
                    margin-bottom: 0;
                }
                
                .name-2{
                    margin-top: 0;
                }

            }
        }

    }

    .footer-right {

    }

`

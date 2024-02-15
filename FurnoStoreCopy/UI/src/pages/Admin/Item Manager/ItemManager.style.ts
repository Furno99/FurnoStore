
import styled from "styled-components";

export const ItemManagerContainer = styled.div`

    .add-product-container {
        width: 15%;
        background-color: orange;
        padding: 10px;
        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;

            .image-selector-container {
                display: flex;
                justify-content: space-between;
                input {
                    height: 100%;
                    width: 80%;
                }
                button {
                    height: 100%;
                    margin: 0;
                }
            }

        }
        button {
            margin-top: 5px;
        }
    }

    .products-container {
        background-color: red;
        padding: 20px;
        display: flex;
        gap : 20px;
        overflow: auto;
    }

    .current-products-container {
        background-color: yellow;
        padding: 20px;
        display: flex;
        gap : 20px;
        overflow: auto;
    }

    button {
        
    }
    

`

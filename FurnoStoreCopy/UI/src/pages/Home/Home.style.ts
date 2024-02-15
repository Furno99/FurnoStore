import styled from "styled-components"

export const HomeContainer = styled.div`
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    
    .home-components {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;
        max-width: 100vw;
        align-items: center;

        .title-container {
            width: 85vw;
            font-size: 23px;
            box-sizing: border-box;
        }

        .popular-figures-title {
            width: 68%
        }

    }

    
`

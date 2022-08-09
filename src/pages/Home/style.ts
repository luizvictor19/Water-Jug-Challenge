import styled from "styled-components";
import forest from "../../assets/Forest.webp"
import river from "../../assets/River.gif"

export const HomeContainer = styled.div`
    background-image: url(${forest});
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        border-radius: 300px;
        background-image: url(${river});
        background-size: cover;
        width: 300px;
        height: 300px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    button {
        width: 70px;
        height: 30px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        border-radius: 10px;
        border: 1px solid black;
        background-color: var(--blue);
        &:hover {
            filter: brightness(120%)
        }
        font-family: 'Source Sans Pro', sans-serif;
    }

    h1 {
        font-size: 2em;
        color: white;
        text-align: center;
        margin: 20px 0 20px 0;
        text-shadow: 2px 2px 1px black;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;
import styled from "styled-components";
import forest from "../../assets/Forest.webp"

export const SolutionContainer = styled.div`
    background-image: url(${forest});
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .inputs-container {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .inputs-and-buttons {
        width: 800px;
        min-height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .calculate-button {
        width: 130px;
        height: 30px;
        cursor: pointer;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1em;
        font-weight: 600;
        border-radius: 10px;
        border: 1px solid black;
        background-color: var(--blue);
        &:hover {
            filter: brightness(120%)
        }
        margin: 30px 0 30px 0;
    }

    .home-page-button {
        width: 100px;
        height: 30px;
        cursor: pointer;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1em;
        font-weight: 600;
        border-radius: 10px;
        border: 1px solid black;
        background-color: var(--blue);
        &:hover {
            filter: brightness(120%)
        }
        margin: 20px 0 30px 0;
    }

    h1 {
        font-size: 2em;
        color: white;
        text-align: center;
        margin: 20px 0 20px 0;
        text-shadow: 2px 2px 1px black;
        font-family: 'Source Sans Pro', sans-serif;
    }

    p {
        margin: 10px 0 10px 0;
        text-shadow: 1px 2px 2px black;
        color: white;
        font-weight: 600;
        font-size: 1.5em;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        transition : linear 0.25s;
        background-color : ${(props) => props.theme.backgroundColor};
        color : ${(props) => props.theme.mainColor};
        font-family : Poppins !important;
    }
    button{
        font-family : Poppins !important;
        padding : 12px 20px;
        background-color : ${(props) => props.theme.backgroundColor};
        color : ${(props) => props.theme.mainColor};
        cursor : pointer;
        border : 1px solid;
        border-radius : 4px;
        transition: linear 0.25s;
    }
    button:hover{
        color : ${(props) => props.theme.backgroundColor};
        background-color : ${(props) => props.theme.mainColor};
    }
    h1, h2, h3, h4{
        letter-spacing : 2px
    }
    h1{
        font-size : 1.6rem;
    }
    h2{
        font-size : 1.4rem;
    }
    nav{
        display : flex;
    }
`;

export default GlobalStyle;
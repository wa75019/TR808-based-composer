import styled from 'styled-components'

export default function Header({isLight, handleToggleTheme}) {
    return (
        <Wrapper>
            <h1>Rythm Composer TR808 based</h1>
            <button onClick={handleToggleTheme}>Switch to {isLight ? "dark" : "light"} theme</button>
        </Wrapper>
        
    )
}
const Wrapper = styled.header`
position: fixed;
width: 100%;
height : 80px;
display : flex;
justify-content : space-evenly;
padding : 0 24px;
align-items : center;
border-bottom : 1px solid;
& a{
    text-decoration : none;
    color : inherit;
}
& a:first-child{
    padding-right : 12px;
}


`


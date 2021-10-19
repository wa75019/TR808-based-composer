import styled from 'styled-components'

export default function Footer(){
    return (
        <Wrapper><p>Proudly propulsed by WA</p></Wrapper>
    )
}
const Wrapper = styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height : 30px;
display : flex;
justify-content : center;
align-items : center;
border-top : 1px solid;
`


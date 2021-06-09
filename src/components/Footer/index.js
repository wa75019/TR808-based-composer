import styled from 'styled-components'

export default function Footer(){
    return (
        <Wrapper><p>Proudly propulsed by WA</p></Wrapper>
    )
}
const Wrapper = styled.footer`
height : 80px;
display : flex;
justify-content : center;
align-items : center;
border-top : 1px solid;
`


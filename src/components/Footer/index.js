import styled from 'styled-components'
import Breakpoints from 'components/UI/Breakpoints'

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
height : 20px;
display : flex;
justify-content : center;
align-items : center;
    @media only screen and ${Breakpoints.device.sm}{
        border-top : 1px solid;
    }

`


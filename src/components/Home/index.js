import Styled from 'styled-components'
import Select from './Select'
import Buttons from './Buttons'


const Home = () => {


    return (
        <Wrapper>
            <Select />
            <Buttons />
        </Wrapper>
    )
}

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`


export default Home

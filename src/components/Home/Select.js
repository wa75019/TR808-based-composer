import styled from 'styled-components'
import { mesures8, mesures4, mesures2 } from '../../redux/actions/columnNumberActions'


const options = [
    {
        key: "1",
        label: "8 mesures",
        value : "8"
    },
    {
        key : "2",
        label: "4 mesures",
        value : "4"
    },
    {
        key : "3",
        label: "2 mesures",
        value : "2"
    }
]

// set numbers of columns
const inputChange = (event) => {
    
    switch(event.target.value) {
        case '8' : {
            return (mesures8())  
        }
        case '4' : {
           return  (mesures4())  
        }
        case '2' : {
            return (mesures2())  
        }
        default : return 8
    }
}

const Select = () => {
    
    return (
        <Wrapper onChange={inputChange}>
            {options.map((option)=>(
                    <option key={option.key} value = {option.value}>{option.label}</option>
                ))}
        </Wrapper>
    )

    
}
const Wrapper = styled.select`
    text-align: center;
    margin-top :  150px; 
    margin-bottom : 60px; 
    margin-left: auto;
    margin-right: auto;
    width : 120px;
    background-color : ${props => props.theme.inputColor};
    cursor : pointer;
    border-color : ${props => props.theme.mainColor};

`


export default Select

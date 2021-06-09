import { MESURES8, MESURES4, MESURES2 } from '../actions/columnNumberActions'

const initialState = {
    columnNumber : 32,
}
export default function columnNumberReducers (state = initialState, action) {
    switch (action.type){
        case MESURES8 : {
            return {
                ...state,
                columnNumber : 32,
            }    
        } 
        case MESURES4 : {
            return {
                ...state,
                columnNumber : 16,
            }
        }
        case MESURES2 : {
            return {
                ...state,
                columnNumber : 8,
            }
        }
        default: return state
    }
}
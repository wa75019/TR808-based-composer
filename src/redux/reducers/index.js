import { combineReducers } from 'redux'
import columnNumberReducers from './columnNumberReducers'

const rootReducer = combineReducers({
    columnNumber : columnNumberReducers
})

export default rootReducer
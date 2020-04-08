import { combineReducers } from 'redux'
import saleReducer from '../sale/saleReducers'

const rootReducer = combineReducers({
    sale: saleReducer
})

export default rootReducer
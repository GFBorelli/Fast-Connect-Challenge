import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import saleReducer from '../sale/saleReducers'
import authReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    sale: saleReducer,
    form: formReducer,
    auth: authReducer
})

export default rootReducer
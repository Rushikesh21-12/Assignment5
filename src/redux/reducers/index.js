import { combineReducers } from 'redux'

import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import userPostReducer from './userPostReducer'
import idReducer from './idReducer'
import postIdReducer from './postIdReducer'
import commentsReducer from './commentsReducer'
import nameReducer from './nameReducer'
import emailReducer from './emailReducer'
import bodyReducer from './bodyReducer'

const rootReducer = combineReducers({
    userReducer, 
    loadingReducer,
    userPostReducer,
    idReducer,
    postIdReducer,
    commentsReducer,
    nameReducer,
    emailReducer,
    bodyReducer
})

export default rootReducer
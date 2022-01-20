import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducers/index'
import rootSaga from '../sagas'

const sagaMiddleWare = createSagaMiddleware()
const middleware = [sagaMiddleWare]

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store
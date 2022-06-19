import {applyMiddleware, createStore} from 'redux'
import appReducer from './reducers'
import thunk from 'redux-thunk'

const middlewares = [thunk]

const store = createStore(appReducer, applyMiddleware(...middlewares))

export default store
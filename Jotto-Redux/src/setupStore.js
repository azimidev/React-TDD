import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers'

export const middleware = [ReduxThunk]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default createStoreWithMiddleware(rootReducer)

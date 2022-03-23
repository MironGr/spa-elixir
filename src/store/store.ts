import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { cards } from 'src/store/cards/reducer'
import rootSaga from 'src/store/sagas'

import { composeWithDevTools } from 'redux-devtools-extension'

const appReducer = combineReducers({
  cards
})

const bindMiddleware = (middleware: SagaMiddleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const configureStore = () => {
  const sagaMiddleware: SagaMiddleware = createSagaMiddleware() 
  const store = createStore(appReducer, bindMiddleware([sagaMiddleware]))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
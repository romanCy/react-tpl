/**
 * 这是redux-thunk
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(reducer,applyMiddleware(thunk));
export default store;

/**
 * 这是redux-saga
 */

// import { createStore,applyMiddleware } from 'redux';
// import createSageMiddleware from 'redux-saga'
// import reducer from './reducer'
// import mySaga from './sages'

// const sageMiddleware = createSageMiddleware()


// const store = createStore(reducer,applyMiddleware(sageMiddleware));
// sageMiddleware.run(mySaga)
// export default store;


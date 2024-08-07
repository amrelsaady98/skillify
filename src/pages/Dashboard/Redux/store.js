import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';

const rootReducer = combineReducers({
  courses: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
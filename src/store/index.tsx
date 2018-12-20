import { applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
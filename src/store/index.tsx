import reducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import IStoreState from './IStoreState';
import {ITest} from "../AC";

const enhancer = applyMiddleware(thunk);

const store = createStore<IStoreState, ITest, any, any>(reducer, enhancer);

export default store;
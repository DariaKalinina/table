import { Store } from "../store/storeTypes";
import { combineReducers } from 'redux';
import personList from './personList';
import productList from './productList';

export default combineReducers<Store>({
    productList,
    personList
})
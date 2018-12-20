import { Store } from "../store/storeTypes";
import { combineReducers } from 'redux';
import productList from './productList';

export default combineReducers<Store>({
    productList
})
import { IStoreState } from "../store/IStoreState";
import { combineReducers } from 'redux';
import list from './list';

export default combineReducers<IStoreState>({
    list
})
import { createStore, combineReducers,applyMiddleware } from "redux";
import logger from 'redux-logger';
import {chatReducer} from './chat/reducers';

console.log(chatReducer);

const rootReducer = combineReducers({ chatReducer: chatReducer });

export default createStore(rootReducer,applyMiddleware(logger));


import {legacy_createStore  } from 'redux';
import RootReducer from './reducers';


export const store = legacy_createStore (RootReducer);
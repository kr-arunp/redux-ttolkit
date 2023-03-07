import { createStore } from 'redux';
import { CounterReducer } from "./CounterReducers";

export const store=createStore(CounterReducer);

import { createStore, combineReducers } from "redux";
import campo from "../store/Reducers/campo";

const reducers = combineReducers({
  campo
});

const theStore = () => createStore(reducers);

export { theStore };

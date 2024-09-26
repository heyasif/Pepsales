import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import tasksReducer from "./Redux/reducers";

const rootReducer = combineReducers({
  tasksReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer);

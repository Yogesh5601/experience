import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/generalReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  general: generalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/generalReducer";
import { thunk } from "redux-thunk";
import notificationReducer from "./reducers/notificationReducer";

const rootReducer = combineReducers({
  general: generalReducer,
  notification: notificationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

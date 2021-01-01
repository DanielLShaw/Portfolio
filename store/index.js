import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const getGlobalState = () =>
  Object.keys(rootReducer).reduce((result, key) => {
    return { ...result, [key]: rootReducer[key](undefined, { type: null }) };
  }, {});

export const makeStore = (initialState = getGlobalState()) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

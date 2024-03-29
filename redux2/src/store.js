import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";

const logMiddleware = () => next => action => {
  console.log(action.type);
  return next(action);
};

const stringMiddleware = () => next => action => {
  if (typeof action === "string")
    return next({
      type: action
    });

  return next(action);
};

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
  )
);

export default store;

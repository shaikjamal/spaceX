
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import spacexReducer from '../reducer/spacexReducer';

function configureStoreProd(initialState, history) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    thunk,
    reactRouterMiddleware
  ];
  return createStore(
    spacexReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

const configureStore = configureStoreProd;
export default configureStore;
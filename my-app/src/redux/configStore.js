import { createStore } from "redux";
import authStateReducer from "./authStateReducer";
import SecureLS from "secure-ls";

const secureLs = new SecureLS()

const getStatesFromLocal = () => {
  const logAuth = secureLs.get("log-auth");
  let defaultState = {
    isLogin: false,
    username: undefined, 
    userId : undefined,
    email : undefined,
  };
  if (logAuth) {
      defaultState = logAuth
    
  }
  return defaultState
};

const setStatesToLocal = (storeStates) => {
    secureLs.set("log-auth", storeStates);
}


const configStore = () => {
  const store = createStore(
    authStateReducer,
    getStatesFromLocal(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(() => {
    setStatesToLocal(store.getState())
  });
  return store;
};

export default configStore;

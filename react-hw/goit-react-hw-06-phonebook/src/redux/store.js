import { compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./contactReducer";
import persistState from "redux-localstorage";

const enhancer = compose(devToolsEnhancer(), persistState());
const store = createStore(rootReducer, enhancer);

export default store;

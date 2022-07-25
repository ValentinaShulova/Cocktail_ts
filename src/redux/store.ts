import {applyMiddleware, combineReducers, createStore} from "redux"
import {cocktailDataReducer} from "./cocktailDataReducer";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import historyReducer from "./historyReducer";



const store = createStore(combineReducers({
        history: historyReducer,
        cocktailData: cocktailDataReducer
    }), applyMiddleware(thunk, logger));

export default store;
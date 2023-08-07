import { combineReducers } from "redux";
import { Reducer } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

const rootreducer = combineReducers({user: Reducer});
const Store = configureStore({reducer: rootreducer, middleware: [thunk, logger]})
export default Store;

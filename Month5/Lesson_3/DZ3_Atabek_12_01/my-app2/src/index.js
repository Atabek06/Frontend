import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger"
import {rootReducer} from "./redux/reducer/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(logger))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

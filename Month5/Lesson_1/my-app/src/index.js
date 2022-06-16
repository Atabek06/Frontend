import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./redux/Reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer)
root.render(
    <Provider store={store}>
            <App />
    </Provider>
);



import React from "react";
import ReactDOM from 'react-dom/client';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import rootReducer from './reducers';
import './index.css';


const store = createStore (rootReducer,composeWithDevTools(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store ={store}>
        <App />
    </Provider>,
)
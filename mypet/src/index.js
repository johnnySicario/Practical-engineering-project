import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";

import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReduces from './redux/reducers/authReduces';
import servicesReduces from './redux/reducers/serviceReduces';


const rootReducer = combineReducers({
  auth : authReduces,
  services : servicesReduces
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const appStore = createStore(rootReducer,composedEnhancer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={appStore}> 
    <App />
    </Provider>
    </BrowserRouter>
);

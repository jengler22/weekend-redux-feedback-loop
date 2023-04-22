import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feelingType = (state = '', action) => {

    if(action.type === 'SET_FEELING_TYPE') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
      return state;
}

const understandingInfo = (state = '', action) => {

    if(action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
      return state;
}




const storeInstance = createStore(
    combineReducers(
        {
            feelingType,
            understandingInfo,
           
        }
    ),
    applyMiddleware(logger)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={ storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);

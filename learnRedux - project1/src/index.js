import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

//store 

import {createStore } from 'redux';
import myReducer from  './reducers/Index';
//import provider de ket noi react- redux

import {Provider} from 'react-redux'
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
<Provider store = {store}>   
<App />
</Provider>,
 document.getElementById('root')
);


registerServiceWorker();

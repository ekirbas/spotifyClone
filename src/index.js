import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Deneme from './Deneme';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
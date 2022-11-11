import React from 'react';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';
import {createRoot} from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

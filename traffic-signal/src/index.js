import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const store = createStore(reducer);

const store = createStore(
  reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<App store={store}/>,
                document.getElementById('root'))

registerServiceWorker();
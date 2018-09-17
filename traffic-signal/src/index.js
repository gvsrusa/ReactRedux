import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import { reducer } from './reducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const store = createStore(reducer);

const store = createStore(
  reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => (
  ReactDOM.render(<App store={store}/>,
    document.getElementById('root'))
)

store.subscribe(render);

render(); // initial render

registerServiceWorker();
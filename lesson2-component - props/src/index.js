import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Demo from './Demo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Demo />, document.getElementById('content'));
registerServiceWorker();

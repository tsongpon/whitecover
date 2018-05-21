import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StoryList from './component/storylist/StoryList';
import App from './component/app/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

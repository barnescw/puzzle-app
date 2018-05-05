import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './client/components/Home';
import Header from './client/components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Header} />
            <Route exact path="/" component={Home} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();

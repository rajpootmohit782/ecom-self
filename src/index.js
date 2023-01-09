import React from 'react';
import ReactDOM from 'react-dom/client';
import {Context} from './components/Context'

import './index.css';
import App from './App';

//bootstrap

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context>
    <App />
</Context>


);

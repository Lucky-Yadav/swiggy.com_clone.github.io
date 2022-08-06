
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import store from './App/store';
import App from "./App";
import { store1 } from "./store/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store1={store1}>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </Provider>
    </BrowserRouter>
);

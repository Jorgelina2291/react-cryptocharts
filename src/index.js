import React from 'react';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import store from "./app/store"
import { render } from 'react-dom';

render(
  <React.StrictMode>
	<Provider store={store}>
	 	<App />	
	</Provider>
   

  </React.StrictMode>,
  document.getElementById('root')
);

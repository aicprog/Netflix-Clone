import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {GlobalStyles} from './globalSyles'

//provider 
import {MoviesProvider} from './Context/movies.context'
import { UserProvider } from './Context/user.context';


ReactDOM.render(
    <UserProvider>
      <GlobalStyles/>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </UserProvider>,
  document.getElementById('root')
);



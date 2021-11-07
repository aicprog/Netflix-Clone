import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {GlobalStyles} from './globalSyles'

//provider 
import {MoviesProvider} from './Context/movies.context'
import { FirebaseAuthProvider } from './Context/auth.context';
import { UserProvider } from './Context/user.context';

ReactDOM.render(
  <FirebaseAuthProvider>
    <UserProvider>
      <GlobalStyles/>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </UserProvider>
  </FirebaseAuthProvider>,
  document.getElementById('root')
);



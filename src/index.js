import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { ThemeProvider } from '@emotion/react';
import { UserProvider } from './contexts/userContext';
import { PostProvider } from './contexts/postContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <UserProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </UserProvider>
        </ThemeProvider>
      </AuthProvider>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
makeServer();

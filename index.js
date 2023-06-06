import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Message from './components/Message'
import Login from './components/Login'
import Tracking from './components/Tracking'
import Subscribe from './components/Subscribe'
import reportWebVitals from './reportWebVitals';



const rootElements = {
  root: document.getElementById('root'),
  rootMessage: document.getElementById('rootMessage'),
  rootLogin: document.getElementById('rootLogin'),
  rootSubscribe: document.getElementById('rootSubscribe'),
  rootTracking: document.getElementById('rootTracking'),
};

if (rootElements.root) {
  ReactDOM.createRoot(rootElements.root).render(<App />);
}

if (rootElements.rootMessage) {
  ReactDOM.createRoot(rootElements.rootMessage).render(<Message />);
}

if (rootElements.rootLogin) {
  ReactDOM.createRoot(rootElements.rootLogin).render(<Login />);
}

if (rootElements.rootSubscribe) {
  ReactDOM.createRoot(rootElements.rootSubscribe).render(<Subscribe />);
}

if (rootElements.rootTracking) {
  ReactDOM.createRoot(rootElements.rootTracking).render(<Tracking />);
}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
  root: ReactDOM.createRoot(document.getElementById('root')),
  rootMessage: ReactDOM.createRoot(document.getElementById('rootMessage')),
  rootLogin: ReactDOM.createRoot(document.getElementById('rootLogin')),
  rootSubscribe: ReactDOM.createRoot(document.getElementById('rootSubscribe')),
  rootTracking: ReactDOM.createRoot(document.getElementById('rootTracking'))
};


rootElements.root.render(<App />);
rootElements.rootMessage.render(<Message />);
rootElements.rootLogin.render(<Login />);
rootElements.rootSubscribe.render(<Subscribe />);
rootElements.rootTracking.render(<Tracking />);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './homepage';
import About from './about';
import Features from './features';
import Gallery from './gallery';
import Contact from './contact';
import Routing from './routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Homepage/> */}
    {/* <About/> */}
    {/* <Features/> */}
    {/* <Gallery/> */}
    {/* <Contact/> */}
    <Routing/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

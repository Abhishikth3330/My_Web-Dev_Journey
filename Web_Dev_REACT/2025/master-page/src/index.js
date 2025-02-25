import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Header from './components/common/header/Header';
// import Footer from './components/common/footer/Footer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Header/>
    <Footer/> */}
  </React.StrictMode>
);

reportWebVitals();

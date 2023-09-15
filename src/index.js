import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.addEventListener("scroll", (event) => {
  // console.log("is scrolling in index pagepagepage");
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

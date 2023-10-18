import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [];

const BUTTON = [
  {id:"Button-1",name:"all",pressed:true},
  {id:"Button-2",name:"active",pressed:true},
  {id:"Button-3",name:"completed",pressed:true},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} button={BUTTON}/>
  </React.StrictMode>
);


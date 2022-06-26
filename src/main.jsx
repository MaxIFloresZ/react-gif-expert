import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

//para que nuestro css se global imprtamos en esta clase(o clase padre)
import './styles.css';

// 73. GifExpertApp component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)

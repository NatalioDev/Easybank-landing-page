import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Public+Sans:200,300,400,700&display=swap'],
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
)

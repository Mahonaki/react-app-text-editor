import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TO DO
/** Create a react application with the following requirements
 *  A notebook/text editor with a button titled "generate"
 *  A "Save" button that asks you for a file name and then saves it on your disk
 *  Settings for the generation, e.g; max number of tokens, "top_p", "top_k", etc
 *  A streaming checkbox that returns the text it generates rather than all at once
 */
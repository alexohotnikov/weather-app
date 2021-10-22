import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

const rootElement = document.querySelector("#react-root");

if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}

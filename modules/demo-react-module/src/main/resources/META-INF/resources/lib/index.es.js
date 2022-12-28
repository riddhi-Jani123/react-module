import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
export default function(elementId) {

	ReactDOM.render(<App
		elementId={elementId}/>, document.getElementById(elementId));

}
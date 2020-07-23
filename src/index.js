import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

//Use interceptors to execute REQUEST code globally
axios.interceptors.request.use(request => {
    console.log(request);
    return request; //always return the request, otherwise you are blocking it
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//Use interceptors to execute RESPONSE code globally
axios.interceptors.response.use(response => {
    console.log(response);
    return response; //always return the request, otherwise you are blocking it
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

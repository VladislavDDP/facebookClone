import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from 'react-router-dom'

let posts = [
  {id: 1, text: 'Hello, how are doing?'},
  {id: 2, text: 'React native? whaaat?'},
  {id: 3, text: 'abracadabra'},
  {id: 4, text: 'there is no time to be lazy'},
  {id: 5, text: 'new post'}
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

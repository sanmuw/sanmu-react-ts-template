import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import "antd/dist/antd.less";
import './index.css'
import App from './App'
import { store } from './redux/store';

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

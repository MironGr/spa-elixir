import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';

import configureStore from 'src/store/store'
import App from './App';


const RootApp: React.FC = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
} 


ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from 'store';

import './index.css';
import TodoApp from './TodoApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
      <TodoApp />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

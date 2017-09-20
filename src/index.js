import _ from 'lodash';
import './index.scss';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

axios.get('/testapi').then((test) => {
    ReactDOM.render(
      <div>
        <h1>Hello, world!</h1>
        <p>{test.data}</p>
      </div>,
      document.querySelector('#root')
    );
})

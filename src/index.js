import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Styles/index.css"
import Root from './Components/Root';

ReactDOM.render(
  <React.StrictMode>
    <div> 
      <h1 style={{ textAlign:"center" }}>
        Our Reviews
      </h1>
      <hr className="custom-hr"/>
      <Root/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


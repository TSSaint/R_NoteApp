// import modules
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Notes from './components/Notes';

// set port
if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(

  // React Component Syntax
  // <(COMPONENT NAME) />
  <Notes />,
  document.getElementById('app')
);

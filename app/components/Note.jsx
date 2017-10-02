import React from 'react';

// same as passing (props) => <div>{props.task}</div>

// use onDelete callback to begin note deletion process

export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
);

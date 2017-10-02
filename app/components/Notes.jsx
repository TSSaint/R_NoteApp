import React from 'react';

// import uuid from 'uuid';

import Note from './Note';


// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Learn React'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   }
// ];

export default ({notes}) => (
    <ul>{notes.map(note =>

    <li key={note.id}><Note task={note.task} /></li>

  )}</ul>
)
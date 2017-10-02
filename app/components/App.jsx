import React from 'react';
import Notes from './Notes';

// import module uuid
import uuid from 'uuid';

// JSON data
const notes = 
[
    {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Learn Vue'
      },
      {
        id: uuid.v4(),
        task: 'Re-Learn Ruby'
      },
      {
        id: uuid.v4(),
        task: 'Re-Learn Ruby on Rails'
      },
      {
        id: uuid.v4(),
        task: 'Make some JavaScript based apps'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      },
      {
        id: uuid.v4(),
        task: 'Go to sleep'
      }
];

export default () => (
    <div>
        <button onClick={() => console.log('add note')}>+</button>
            <Notes notes={notes} />
    </div>
);
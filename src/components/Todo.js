import React from 'react';

export const Todo = (props) => {
  const { todoName } = props.todo;
  return (
    <li>
      <input type="checkbox" />
      {todoName}{' '}
      <button type="btn" onClick={() => props.updateTodo(props.id)}>
        Edit
      </button>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => props.deleteTodo(props.id)}
      >
        x
      </span>
    </li>
  );
};

import React from 'react';

export const Todo = (props) => {
  const { title } = props.todo;
  return (
    <li>
      <input type="checkbox" />
      {title}{' '}
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

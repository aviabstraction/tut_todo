import React from 'react';
import { Todo } from './Todo';

export const TodoList = (props) => {
  const { todoList, deleteTodo, updateTodo } = props;
  return (
    <ul>
      {todoList.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          deleteTodo={deleteTodo}
          id={index}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

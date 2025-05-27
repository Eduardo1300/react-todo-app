import React from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <div className="actions">
        <button onClick={() => toggleTodo(todo.id)}>
          <FaCheckCircle />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
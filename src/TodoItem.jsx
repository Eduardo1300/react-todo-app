import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 rounded-lg shadow-sm border ${
        todo.completed ? 'bg-green-100 line-through text-gray-600' : 'bg-white'
      }`}
    >
      <span
        className="cursor-pointer flex-1"
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700 transition ml-3"
        onClick={() => deleteTodo(todo.id)}
        title="Eliminar tarea"
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default TodoItem;

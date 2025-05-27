import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TodoForm;
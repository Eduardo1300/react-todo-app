import { useState } from 'react';
const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const submit = e => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };
  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        className="flex-1 border p-2 rounded"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button className="bg-blue-600 text-white px-4 rounded">Agregar</button>
    </form>
  );
};
export default TodoForm;

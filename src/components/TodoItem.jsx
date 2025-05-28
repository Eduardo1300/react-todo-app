const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li
    className={`flex items-center gap-2 p-2 border-b ${
      todo.completed ? 'line-through text-gray-500' : ''
    }`}
  >
    <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
    <span className="flex-1">{todo.text}</span>
    <small className="mr-2 text-xs">{todo.createdAt}</small>
    <button onClick={() => onDelete(todo.id)} className="text-red-500">X</button>
  </li>
);
export default TodoItem;

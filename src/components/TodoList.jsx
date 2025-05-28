import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul>
    {todos.map(t => (
      <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);
export default TodoList;

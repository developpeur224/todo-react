import { Todo } from '../reducers/todoReducer';
import { useTheme } from '../context/ThemeContext';

interface TodoItemProps {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem = ({ todo, onRemove, onToggle }: TodoItemProps) => {
  const { theme } = useTheme();

  return (
    <div className={`todo-item ${theme === 'dark' ? 'dark' : ''}`} data-theme={theme}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onRemove(todo.id)}
        className="todo-delete"
        aria-label="Supprimer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="delete-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
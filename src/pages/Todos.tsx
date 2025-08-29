import { useReducer, useRef, useEffect } from 'react';
import { todoReducer, initialTodos, TodoState } from '../reducers/todoReducer';
import TodoItem from '../components/TodoItem';
import { useTheme } from '../context/ThemeContext';

const initialState: TodoState = {
  todos: initialTodos,
  showCompletedOnly: false,
  removedCount: 0
};

const Todos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const removedCountRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.todos]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input && input.value.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: input.value.trim() });
      input.value = '';
    }
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });    
    removedCountRef.current += 1;
  };

  const handleToggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const filteredTodos = state.showCompletedOnly
    ? state.todos.filter(todo => todo.completed)
    : state.todos;

  return (
    <div className="page" data-theme={theme}>
      <div className="page-container">
        <h2 className="page-title">Gestion des tâches</h2>
        
        <form onSubmit={handleAddTodo} className="todo-form">
          <div className="todo-input-container">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ajouter une nouvelle tâche..."
              className="todo-input"
            />
            <button
              type="submit"
              className="todo-submit"
            >
              Ajouter
            </button>
          </div>
        </form>

        <div className="todo-actions">
          <button
            onClick={() => dispatch({ type: 'SHOW_TODO_COMPLETED' })}
            className={`todo-btn ${state.showCompletedOnly ? 'todo-btn-primary' : 'todo-btn-secondary'}`}
          >
            Afficher complétées
          </button>
          <button
            onClick={() => dispatch({ type: 'UNSHOW_TODO_COMPLETED' })}
            className={`todo-btn ${!state.showCompletedOnly ? 'todo-btn-primary' : 'todo-btn-secondary'}`}
          >
            Toutes les tâches
          </button>
          <button
            onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
            className="todo-btn todo-btn-danger"
          >
            Supprimer complétées
          </button>
        </div>

        <div className="todo-list">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onRemove={handleRemoveTodo}
                onToggle={handleToggleTodo}
              />
            ))
          ) : (
            <div className="todo-empty">
              <p>Aucune tâche à afficher</p>
            </div>
          )}
        </div>

        <div className="todo-stats">
          <h3 className="stats-title">Statistiques</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-value">{state.todos.length}</p>
              <p className="stat-label">Total des tâches</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">{state.todos.filter(t => t.completed).length}</p>
              <p className="stat-label">Tâches complétées</p>
            </div>
            <div className="stat-item">
             <p className="stat-value">{state.removedCount}</p>
              <p className="stat-label">Tâches supprimées</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
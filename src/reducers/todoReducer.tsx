// src/reducers/todoReducer.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoAction =
  | { type: 'SHOW_TODO_COMPLETED' }
  | { type: 'UNSHOW_TODO_COMPLETED' }
  | { type: 'REMOVE_TODO'; payload: number }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number };

export interface TodoState {
  todos: Todo[];
  showCompletedOnly: boolean;
  removedCount: number;
}

export const initialTodos: Todo[] = [
  { id: 1, text: 'Apprendre React', completed: true },
  { id: 2, text: 'Découvrir TypeScript', completed: false },
  { id: 3, text: 'Maîtriser TailwindCSS', completed: false },
  { id: 4, text: 'Créer une application Todo', completed: true },
  { id: 5, text: 'Implémenter un thème sombre', completed: false },
  { id: 6, text: 'Utiliser useReducer', completed: true },
  { id: 7, text: 'Gérer le routing', completed: false },
  { id: 8, text: 'Configurer Tailwind', completed: false },
  { id: 9, text: 'Déployer le projet', completed: false },
  { id: 10, text: 'Partager le code', completed: false },
];

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'SHOW_TODO_COMPLETED':
      return { ...state, showCompletedOnly: true };
    case 'UNSHOW_TODO_COMPLETED':
      return { ...state, showCompletedOnly: false };
    case 'REMOVE_TODO':
        return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.payload),
            removedCount: state.removedCount + 1
        };;
    case 'CLEAR_COMPLETED':
        const completedTodos = state.todos.filter(todo => todo.completed);
        return {
            ...state, 
            todos: state.todos.filter(todo => !todo.completed),
            removedCount: state.removedCount + completedTodos.length
        };
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
};
import { useReducer, useRef } from "react";

type Todo = { id: number; text: string; completed: boolean };

type Action =
  | { type: "REMOVE_TODO"; id: number }
  | { type: "CLEAR_COMPLETED" }
  | { type: "SHOW_TODO_COMPLETED" }
  | { type: "UNSHOW_TODO_COMPLETED" }
  | { type: "ADD_TODO"; text: string };

const initialTodos: Todo[] = [
  { id: 1, text: "Acheter du pain", completed: false },
  { id: 2, text: "Finir le TP React", completed: true },
  { id: 3, text: "Faire les courses", completed: false },
  { id: 4, text: "Réviser pour l’examen", completed: true },
  { id: 5, text: "Nettoyer la maison", completed: false },
  { id: 6, text: "Envoyer un email", completed: true },
  { id: 7, text: "Appeler maman", completed: false },
  { id: 8, text: "Regarder un film", completed: true },
  { id: 9, text: "Apprendre TypeScript", completed: false },
  { id: 10, text: "Coder un projet React", completed: true },
];

function reducer(state: { todos: Todo[]; showCompleted: boolean }, action: Action) {
  switch (action.type) {
    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter((t) => t.id !== action.id) };
    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter((t) => !t.completed) };
    case "SHOW_TODO_COMPLETED":
      return { ...state, showCompleted: true };
    case "UNSHOW_TODO_COMPLETED":
      return { ...state, showCompleted: false };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }],
      };
    default:
      return state;
  }
}

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, { todos: initialTodos, showCompleted: false });
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteCountRef = useRef(0);

  const filteredTodos = state.showCompleted
    ? state.todos.filter((t) => t.completed)
    : state.todos;

  const handleAddTodo = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      dispatch({ type: "ADD_TODO", text: inputRef.current.value });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleRemoveTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
    deleteCountRef.current += 1;
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Gestion de tâches</h1>

      {/* Ajout d'une tâche */}
      <div className="flex gap-2 mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Nouvelle tâche..."
          className="flex-1 border border-gray-300 dark:border-gray-600 p-2 rounded-lg focus:ring focus:ring-blue-400 dark:bg-gray-700"
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
        >
          Ajouter
        </button>
      </div>

      {/* Boutons de gestion */}
      <div className="flex gap-3 mb-6 justify-center">
        <button
          onClick={() => dispatch({ type: "SHOW_TODO_COMPLETED" })}
          className="bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-white"
        >
          Afficher complétées
        </button>
        <button
          onClick={() => dispatch({ type: "UNSHOW_TODO_COMPLETED" })}
          className="bg-gray-500 hover:bg-gray-600 px-3 py-2 rounded-lg text-white"
        >
          Tout afficher
        </button>
        <button
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
          className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-white"
        >
          Vider complétées
        </button>
      </div>

      {/* Liste des todos */}
      <ul className="space-y-3">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-3 border rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        🔥 Tâches supprimées : {deleteCountRef.current}
      </p>
    </div>
  );
}

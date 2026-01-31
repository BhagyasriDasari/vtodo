import { useReducer, useEffect } from "react";
import TodoItem from "./TodoItem";
import FilterControls from "./FilterControls";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./todo.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map(t =>
        t.id === action.id ? { ...t, completed: !t.completed } : t
      );
    case "DELETE":
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default function TodoApp() {
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);
  const [todos, dispatch] = useReducer(reducer, storedTodos);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  // ✅ FIX: persist todos safely
  useEffect(() => {
    setStoredTodos(todos);
  }, [todos, setStoredTodos]);

  const filtered = todos.filter(t =>
    filter === "all"
      ? true
      : filter === "active"
      ? !t.completed
      : t.completed
  );

  return (
    <div className="card">
      <h2>Tasks</h2>

      <input
        placeholder="Add task and press Enter"
        onKeyDown={e => {
          if (e.key === "Enter" && e.target.value.trim()) {
            dispatch({
              type: "ADD",
              payload: {
                id: Date.now(),
                text: e.target.value,
                completed: false,
                priority: "Low"
              }
            });
            e.target.value = "";
          }
        }}
      />

      <FilterControls setFilter={setFilter} />

      {filtered.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

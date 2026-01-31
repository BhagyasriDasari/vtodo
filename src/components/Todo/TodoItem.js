export default function TodoItem({ todo, dispatch }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: "TOGGLE", id: todo.id })}
      />
      <span className={todo.completed ? "done" : ""}>{todo.text}</span>
      <button className="btn-danger" onClick={() => dispatch({ type: "DELETE", id: todo.id })}>
  Delete
</button>
    </div>
  );
}

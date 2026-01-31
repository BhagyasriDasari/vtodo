export default function FilterControls({ setFilter }) {
  return (
    <div className="todo-filters">

      {["all", "active", "completed"].map(f => (
        <button className="btn-secondary" onClick={() => setFilter(f)}>
  {f}
</button>
      ))}
    </div>
  );
}

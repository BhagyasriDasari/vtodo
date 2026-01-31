import { useState } from "react";
import "./search.css";

const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

export default function SearchList() {
  const [q, setQ] = useState("");

  const highlight = text =>
    !q ? text :
    text.split(new RegExp(`(${q})`, "gi")).map((p, i) =>
      p.toLowerCase() === q.toLowerCase()
        ? <b key={i}>{p}</b>
        : p
    );

  const filtered = items.filter(i =>
    i.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Live Search</h2>
      <input placeholder="Search..." onChange={e => setQ(e.target.value)} />
      <p>Results: {filtered.length}</p>
      {filtered.map(i => <div key={i}>{highlight(i)}</div>)}
    </div>
  );
}

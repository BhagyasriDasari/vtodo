import { useState } from "react";
import "./progress.css";

export default function MultiProgressBar() {
  const [values, setValues] = useState([0, 0, 0]);
  const avg = values.reduce((a, b) => a + b) / values.length;

  const color =
    avg < 40 ? "red" : avg > 70 ? "green" : "orange";

  return (
    <div className="card">
      <h2>Progress Bar</h2>
      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={e => {
            const n = Math.min(100, Math.max(0, e.target.value));
            const copy = [...values];
            copy[i] = n;
            setValues(copy);
          }}
        />
      ))}
      <div className="bar">
        <div className="fill" style={{ width: `${avg}%`, background: color }} />
      </div>
    </div>
  );
}

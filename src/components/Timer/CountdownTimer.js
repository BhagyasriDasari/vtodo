import { useEffect, useState } from "react";
import "./timer.css";

export default function CountdownTimer() {
  const [time, setTime] = useState(10);
  const [left, setLeft] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft(l => (l <= 0 ? 0 : l - 0.01));
    }, 10);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="timer-buttons">
      <h2>Countdown Timer</h2>
      <input
        type="number"
        disabled={running}
        value={time}
        onChange={e => setTime(Math.max(1, e.target.value))}
      />
      <h3 className="timer-display">{left.toFixed(2)}s</h3>
     <button className="btn-success" onClick={() => { setLeft(time); setRunning(true); }}>
  Start
</button>

<button className="btn-warning" onClick={() => setRunning(false)}>
  Pause
</button>

<button className="btn-primary" onClick={() => setRunning(true)}>
  Resume
</button>

<button className="btn-danger" onClick={() => { setRunning(false); setLeft(time); }}>
  Reset
</button>
    </div>
  );
}

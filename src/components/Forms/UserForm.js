import { useState } from "react";
import "./form.css";

export default function UserForm() {
  const [form, setForm] = useState({ name: "", email: "", id: "", password: "" });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid Email";
    if (!form.id) e.id = "Required";
    if (!form.password) e.password = "Required";
    return e;
  };

  const submit = e => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) return setErrors(err);
    setSubmitted(form);
    setForm({ name: "", email: "", id: "", password: "" });
    setErrors({});
  };

  return (
    <div className="card">
      <h2>User Form</h2>
      <form onSubmit={submit}>
        {["name", "email", "id"].map(f => (
          <div key={f}>
            <input
              placeholder={f}
              value={form[f]}
              onChange={e => setForm({ ...form, [f]: e.target.value })}
            />
            <span className="error">{errors[f]}</span>
          </div>
        ))}
        <input
          type={show ? "text" : "password"}
          placeholder="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
       <button type="button" className="btn-purple" onClick={() => setShow(!show)}>
  {show ? "Hide" : "Show"}
</button>
        <span className="error">{errors.password}</span>
        <button type="submit" className="btn-primary">
  Submit
</button>
      </form>
      {submitted && <pre>{JSON.stringify(submitted, null, 2)}</pre>}
    </div>
  );
}

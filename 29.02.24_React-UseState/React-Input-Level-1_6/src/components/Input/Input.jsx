import { useState } from "react";
import "./Input.css";

const Input = () => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => setVorname(event.target.value)}
          type="text"
          placeholder="vorname"
          value={vorname}
        />
        <input
          onChange={(event) => setNachname(event.target.value)}
          value={nachname}
          type="text"
          placeholder="nachname"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          type="email"
          placeholder="email"
        />
      </form>
      <p>Vorname: {vorname} </p>
      <p>Nachname: {nachname}</p>
      <p>Email: {email} </p>
    </div>
  );
};

export default Input;

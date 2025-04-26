import React, { useState } from 'react';

const avatars = [
  "Broth Baby", "Broth Kid", "Broth Teen", "Brotha Teen",
  "Broth Young Man", "Brotha Young Woman", "Broth Adult", "Brotha Adult", "Broth Wise"
];

const colors = ["#6C5DD3", "#00C896", "#FF715B", "#FFC542", "#5B5F97", "#3DD9EB"];

export default function App() {
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState(colors[0]);

  const getAvatar = () => {
    if (ageGroup === "baby") return 0;
    if (ageGroup === "child") return 1;
    if (ageGroup === "teen") return gender === "male" ? 2 : 3;
    if (ageGroup === "young") return gender === "male" ? 4 : 5;
    if (ageGroup === "adult") return gender === "male" ? 6 : 7;
    return 8;
  };

  return (
    <div style={{ backgroundColor: color, minHeight: "100vh", padding: "2rem", color: "#fff", textAlign: "center" }}>
      <h1>¡Hola! Soy tu Broth</h1>
      <p>Selecciona tu edad y género para empezar</p>

      <div style={{ margin: "1rem 0" }}>
        <label>Edad:</label><br />
        <select onChange={(e) => setAgeGroup(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="baby">3-6 años</option>
          <option value="child">7-11 años</option>
          <option value="teen">12-17 años</option>
          <option value="young">18-30 años</option>
          <option value="adult">31-60 años</option>
          <option value="senior">60+ años</option>
        </select>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <label>Género:</label><br />
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
        </select>
      </div>

      <div style={{ margin: "1rem 0" }}>
        <label>Color del entorno:</label><br />
        {colors.map((c, i) => (
          <button key={i} onClick={() => setColor(c)} style={{ background: c, margin: "0 5px", width: 30, height: 30, borderRadius: "50%", border: "none" }}></button>
        ))}
      </div>

      <h2>Tu Broth:</h2>
      <div style={{ fontSize: "1.5rem", marginTop: "1rem" }}>{avatars[getAvatar()]}</div>
    </div>
  );
}

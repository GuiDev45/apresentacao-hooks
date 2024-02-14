import { useState } from "react";

export default function TutorialuseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hook useState</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar Valor</button>
      <button onClick={() => setCount(count - 1)}>Diminuir Valor</button>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function TutorialuseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("A contagem está em: ", count);

    return () => {
      console.log("Estou Limpo!");
    };
  }, [count]);

  return (
    <div>
      <h1>Hook useEffect</h1>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Adicionar Valor</button>
      <button onClick={() => setCount(count - 1)}>Diminuir Valor</button>
    </div>
  );
}

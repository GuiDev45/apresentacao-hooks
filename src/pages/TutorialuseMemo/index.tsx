import { useMemo, useState } from "react";

export default function TutorialuseMemo() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const memoizedItems = useMemo(() => {
    console.log("Recalculando a lista com useMemo");
    return items;
  }, [items]);

  return (
    <div>
      <h1>Hook useMemo</h1>
      <button onClick={addItem}>Adicionar Item</button>
      <ul>
        {memoizedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

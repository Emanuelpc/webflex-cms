"use client";

import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <section>
      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar +
      </button>

      <button onClick={() => setContador(contador - 1)}>
        Restar -
      </button>
    </section>
  );
}
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

export default function contar() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Count</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          Contar é {count}
        </button>
      </div>
    </>
  );
}

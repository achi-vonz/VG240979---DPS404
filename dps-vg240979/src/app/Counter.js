

// Counter.js
import "./styles.css";

import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </div>
    );
}
import { signal } from "@preact/signals";

const count = signal(0);

export function Counter() {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => count.value++}>click me up</button>
            <button onClick={() => count.value--}>click me down</button>
        </div>
    )
}
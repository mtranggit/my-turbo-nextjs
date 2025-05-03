"use client";

import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>Counter</h2>
			<p data-testid="count">Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
}
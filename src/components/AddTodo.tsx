// src/components/AddTodo.tsx
import React, { useState } from "react";

interface AddTodoProps {
	onAdd: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input) {
			onAdd(input);
			setInput("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Add new todo"
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default AddTodo;

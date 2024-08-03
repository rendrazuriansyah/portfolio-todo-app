import React, { useState } from "react";
import styles from "./AddTodo.module.css"; // Impor CSS Module

interface AddTodoProps {
	onAdd: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			onAdd(input.trim());
			setInput(""); // Reset input field after adding todo
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="field"
		>
			<div className={`control ${styles.input}`}>
				<input
					type="text"
					className={`input is-medium ${styles.input}`}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add new todo"
				/>
			</div>
			<div className="control">
				<button
					type="submit"
					className={`button is-primary is-fullwidth ${styles.button}`}
				>
					Add Todo
				</button>
			</div>
		</form>
	);
};

export default AddTodo;

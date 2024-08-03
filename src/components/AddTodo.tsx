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
		<form
			onSubmit={handleSubmit}
			className="field"
		>
			<div className="control">
				<input
					type="text"
					className="input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add new todo"
				/>
			</div>
			<div className="control">
				<button
					type="submit"
					className="button is-primary mt-2"
				>
					Add
				</button>
			</div>
		</form>
	);
};

export default AddTodo;

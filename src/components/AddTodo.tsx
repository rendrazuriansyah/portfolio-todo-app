import React, { useState } from "react";

interface AddTodoProps {
	onAdd: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
	const [input, setInput] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			onAdd(input.trim());
			setInput("");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="field"
		>
			<div className="control has-icons-left">
				<input
					type="text"
					className="input is-large"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add new todo"
				/>
				<span className="icon is-left">
					<i className="fas fa-plus"></i>
				</span>
			</div>
			<div className="control mt-2">
				<button
					type="submit"
					className="button is-primary is-fullwidth"
				>
					Add
				</button>
			</div>
		</form>
	);
};

export default AddTodo;

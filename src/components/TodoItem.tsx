import React from "react";

interface TodoItemProps {
	todo: string;
	onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => (
	<div className="notification is-dark">
		<div className="is-flex is-justify-content-space-between is-align-items-center">
			<span>{todo}</span>
			<button
				onClick={onDelete}
				className="delete is-small"
				aria-label="Delete Todo"
			></button>
		</div>
	</div>
);

export default TodoItem;

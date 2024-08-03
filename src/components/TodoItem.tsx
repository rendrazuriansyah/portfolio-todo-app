import React from "react";

interface TodoItemProps {
	todo: string;
	onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => (
	<div className="notification is-light">
		<div className="is-flex is-justify-content-space-between is-align-items-center">
			<span className="has-text-dark">{todo}</span>
			<button
				onClick={onDelete}
				className="button is-small is-danger"
				aria-label="Delete Todo"
			>
				<i className="fas fa-trash-alt"></i> {/* Ikon hapus */}
			</button>
		</div>
	</div>
);

export default TodoItem;

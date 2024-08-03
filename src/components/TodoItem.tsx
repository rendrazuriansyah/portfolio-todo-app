import React from "react";

interface TodoItemProps {
	todo: string;
	onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => (
	<div className="box">
		<div className="columns is-vcentered">
			<div className="column">
				<span className="is-size-5">{todo}</span>
			</div>
			<div className="column is-narrow">
				<button
					onClick={onDelete}
					className="button is-danger is-outlined"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
);

export default TodoItem;

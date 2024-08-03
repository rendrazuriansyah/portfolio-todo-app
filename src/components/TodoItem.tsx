import React from "react";

interface TodoItemProps {
	todo: string;
	onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => (
	<div>
		<span>{todo}</span>
		<button onClick={onDelete}>Delete</button>
	</div>
);

export default TodoItem;

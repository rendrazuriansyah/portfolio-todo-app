import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App: React.FC = () => {
	const [todos, setTodos] = useState<string[]>([]);

	const addTodo = (todo: string) => {
		setTodos([...todos, todo]);
	};

	const deleteTodo = (index: number) => {
		setTodos(todos.filter((_, i) => i !== index));
	};

	return (
		<div className="container mt-5">
			<h1 className="title has-text-centered">My Todo List</h1>
			<div className="box">
				<AddTodo onAdd={addTodo} />
				<TodoList
					todos={todos}
					onDelete={deleteTodo}
				/>
			</div>
		</div>
	);
};

export default App;

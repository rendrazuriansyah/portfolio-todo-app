import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css"; // Impor CSS Global

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
			<div className="columns is-centered">
				<div className="column is-12-mobile is-8-tablet is-6-desktop">
					<h1 className="title has-text-centered has-text-weight-bold has-text-primary">
						<i className="fas fa-tasks"></i> My Todo List
					</h1>
					<div className="box">
						<AddTodo onAdd={addTodo} />
						<TodoList
							todos={todos}
							onDelete={deleteTodo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

import React from 'react';

function Todo({ todo }) {
	return(
		<div className="todo-card">
			<h1 className="todo-header">{todo.item}</h1>
		</div>
	)
}

export default Todo;
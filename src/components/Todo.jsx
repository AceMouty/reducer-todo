import React from 'react';

function Todo({ todo, dispatch }) {

	const clickHandler = () => {
		const h1 = document.getElementById(`${todo.item}`);
		h1.classList.toggle("completed");
		console.log(todo.id, todo.completed)
		dispatch({type: "COMPLETE", payload: todo.id})
	}
	return(
		<div className="todo-card">
			<h1 className="todo-header" onClick={clickHandler} id={todo.item}>{todo.item}</h1>
		</div>
	)
}

export default Todo;
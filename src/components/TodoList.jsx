import React from 'react';

// Bring in a component
import Todo from './Todo';

function TodoList ({ todos, dispatch }) {
	const clickHandler = () => {
		dispatch({type: "CLEAR_TODOS"})
	}
	return(
		<section className="todoList-container">
			{todos.map(todo => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
			})}
			<button onClick={clickHandler}>Clear Completed</button>
		</section>
	)
}

export default TodoList;
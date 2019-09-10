import React from 'react';

// Bring in a component
import Todo from './Todo';

function TodoList ({ todos, dispatch }) {

	return(
		<section className="todoList-container">
			{todos.map(todo => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
			})}
		</section>
	)
}

export default TodoList;
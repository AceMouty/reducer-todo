import React from 'react';

// Bring in a component
import Todo from './Todo';

function TodoList ({ todos }) {
	return(
		<section className="todoList-container">
			{todos.map(todo => {
				return <Todo key={todo.id} todo={todo}/>
			})}
		</section>
	)
}

export default TodoList;
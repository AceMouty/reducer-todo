import React, { useState } from 'react';

function Form ({ dispatch }) {
	const [todoText, setTodoText] = useState("");

	const handleChange = e => {
		console.log(e.target.value);
		setTodoText(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(todoText)
		dispatch({type: "ADD_TODO", payload: todoText})
		setTodoText("");
	}
	return(
		<form onSubmit={handleSubmit}>
			<input 
				type="text"
				name="todoText"
				value={todoText}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form;
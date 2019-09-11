import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

// Setup reducer
import {reducer, initialState} from './reducers/addTodoReducer';

function App() {
	const [todolist, dispatch] = useReducer(reducer, initialState);

	return (
    <div className="App">
			<Form dispatch={dispatch}/>
			<TodoList todos={todolist.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;

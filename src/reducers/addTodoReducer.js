import uuid from 'uuid/v1'
export const initialState = {
	todos:[{
		item: 'Learn about reducers',
		completed: false,
		id: 3892987589
	},]
}

export const reducer = (state, action) => {
	switch(action.type){
		case "ADD_TODO":
			return {todos:[...state.todos, {item: action.payload, completed: false, id: uuid() }]}
		default:
			return state;
	}
}
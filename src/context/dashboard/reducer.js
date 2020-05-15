import { ADD_TODO, REMOVE_TODO } from './keys'

export const initialState = {
    todos: []
}

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case REMOVE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
        default:
            return  state
    }
}
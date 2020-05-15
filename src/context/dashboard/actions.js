import { ADD_TODO, REMOVE_TODO } from './keys'

export const addTodo = dispatch => todo => {
    dispatch({ type: ADD_TODO, payload: { value: todo, id: Math.random() } })
}

export const removeTodo = dispatch => todoId => {
    dispatch({ type: REMOVE_TODO, payload: todoId })
}
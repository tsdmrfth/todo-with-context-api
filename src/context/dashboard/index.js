import createDataContext from '../base/createDataContext'
import reducer, { initialState } from './reducer'
import { addTodo, removeTodo } from './actions'

export const {
    Context: DashboardContext,
    Provider: DashboardProvider
} = createDataContext(reducer, { addTodo, removeTodo }, initialState)
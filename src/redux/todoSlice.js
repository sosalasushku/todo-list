import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        newTodo: '',
        todos: [],
        filteredTodos: []
    },
    reducers: {
        setNewTodo(state, action) {
            state.newTodo = action.payload
        },
        addTodo(state, action) {
            state.todos.push({
                content: state.newTodo,
                id: uuidv4(),
                isCompleted: false
            })
            state.newTodo = ''
        },
        setTodos(state, action) {
            state.todos = action.payload
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        completeTodo(state, action) {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isCompleted = !todo.isCompleted
                }
                return todo
            })
        },
        filterTodos(state, action) {
            switch (action.payload) {
                case 'uncompleted':
                    state.filteredTodos = state.todos.filter(todo => !todo.isCompleted)
                    break
                case 'completed':
                    state.filteredTodos = state.todos.filter(todo => todo.isCompleted)
                    break
                default:
                    state.filteredTodos = state.todos
            }
        }
    }
})

export const { setNewTodo, addTodo, setTodos, deleteTodo, completeTodo, filterTodos } = todoSlice.actions

export default todoSlice.reducer
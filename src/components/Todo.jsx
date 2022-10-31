import React from 'react'

import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'

import { useDispatch } from 'react-redux'
import { deleteTodo, completeTodo } from '../redux/todoSlice'

const Todo = ({ todo }) => {

    const dispatch = useDispatch()

    const handleComplete = () => {
        dispatch(completeTodo(todo.id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <Paper
            className={todo.isCompleted ? 'todo completed' : 'todo'}
            elevation={4}
        >
            <div className='todo-content'>
                {todo.content}
            </div>
            <div className='btn-group'>
                <button className='todo-btn complete' onClick={handleComplete}><DoneIcon fontSize='small' /></button>
                <button className='todo-btn delete' onClick={handleDelete}><DeleteIcon fontSize='small' /></button>
            </div>
        </Paper>
    )
}

export default Todo

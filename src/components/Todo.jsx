import React from 'react'

import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import Paper from '@mui/material/Paper'

const Todo = ({ todo, todos, setTodos }) => {

    const handleComplete = () => {
        setTodos(todos.map(el => {
            if (el.id === todo.id) {
                el.isCompleted = !el.isCompleted
            }
            return el
        }))
    }

    const handleDelete = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
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

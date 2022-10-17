import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import { Container, FormControl, InputLabel, Select, TextField, MenuItem } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

const Form = ({ newTodo, setNewTodo, todos, setTodos, filter, setFilter }) => {

    const handleInput = (e) => {
        setNewTodo(e.target.value)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleAdd(e)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const myTodo = {
            content: newTodo,
            id: uuidv4(),
            isCompleted: false
        }

        setTodos([...todos, myTodo])
        setNewTodo('')
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className='form'>
            <Container maxWidth="sm" >
                <div className='form-container'>
                    <div className="header">
                        <h1>Track your tasks &#128105;&#8205;&#128187;</h1>
                    </div>
                    <div className='input'>
                        <TextField
                            fullWidth
                            label="Что планируете сделать?"
                            variant="standard"
                            value={newTodo}
                            onChange={handleInput}
                            onKeyDown={handleEnter}
                        />
                        <IconButton
                            onClick={handleAdd}
                            title='Добавить задачу'
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                    <FormControl size="small" className='select'>
                        <InputLabel id="demo-select-small">Показать</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={filter}
                            label="Показать"
                            onChange={handleFilter}

                        >
                            <MenuItem value='all'>Все</MenuItem>
                            <MenuItem value='uncompleted'>Незавершённые</MenuItem>
                            <MenuItem value='completed'>Завершённые</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </Container>
        </div>

    )
}

export default Form
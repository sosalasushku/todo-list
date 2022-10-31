import React from 'react'

import { Container, FormControl, InputLabel, Select, TextField, MenuItem } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, setNewTodo } from '../redux/todoSlice'
import { changeFilter } from '../redux/filterSlice'

const Form = () => {

    const dispatch = useDispatch()
    const newTodo = useSelector(state => state.todoReducer.newTodo)
    const filter = useSelector(state => state.filterReducer.filter)

    const handleInput = (e) => {
        dispatch(setNewTodo(e.target.value))
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleAdd(e)
    }

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(addTodo())
    }

    const handleFilter = (e) => {
        const filt = e.target.value
        dispatch(changeFilter(filt))
        console.log('Filter from select: ', e.target.value)
    }

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
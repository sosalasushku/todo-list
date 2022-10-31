import { useState, useEffect } from 'react'

import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

import Container from '@mui/material/Container'

import { useDispatch, useSelector } from 'react-redux'
import { setTodos, filterTodos } from './redux/todoSlice'


function App() {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filterReducer.filter)
  const todos = useSelector(state => state.todoReducer.todos)

  dispatch(filterTodos(filter))

  const getFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      dispatch(setTodos(JSON.parse(localStorage.getItem('todos'))))
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  useEffect(() => {
    saveToLocalStorage()
  }, [todos])

  useEffect(() => {
    dispatch(filterTodos(filter))
  }, [filter, todos])

  return (
    <>
      <Form />
      <TodoList />
    </>
  );
}

export default App;

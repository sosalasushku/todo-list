import { useState, useEffect } from 'react'

import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

import Container from '@mui/material/Container'

function App() {

  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  const filterTodos = () => {
    switch (filter) {
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.isCompleted))
        break
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.isCompleted))
        break
      default:
        setFilteredTodos(todos)
    }
  }

  const getFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
      console.log(todos)
    } else {
      // setTodos(JSON.parse([]))
      console.log(todos)
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
    filterTodos()
  }, [filter, todos])

  return (
    // <div className="app">
    <>
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </>

    // </div>
  );
}

export default App;

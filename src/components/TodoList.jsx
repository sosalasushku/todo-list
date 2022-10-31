import Todo from './Todo'
import { Container } from '@mui/material'

import { useSelector } from 'react-redux'

const TodoList = () => {

    const filteredTodos = useSelector(state => state.todoReducer.filteredTodos)

    return (
        <Container maxWidth="sm">
            <div className='todolist'>
                {
                    filteredTodos.map(todo => (
                        <Todo
                            todo={todo}
                            key={todo.id}
                        />
                    ))
                }
            </div>
        </Container>
    )
}

export default TodoList
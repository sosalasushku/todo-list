import Todo from './Todo'
import { Container } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <Container maxWidth="sm">
            <div className='todolist'>
                {
                    filteredTodos.map(todo => (
                        <Todo
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                            key={uuidv4()}
                        />
                    ))
                }
            </div>
        </Container>

    )
}

export default TodoList
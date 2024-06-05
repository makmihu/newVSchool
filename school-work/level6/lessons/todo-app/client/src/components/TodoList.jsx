import { useContext } from 'react'
import Todo from './Todo.jsx'
import { UserContext } from '../context/UserProvider.jsx'

export default function TodoList(){
  const {todos} = useContext(UserContext)

  
  return (
    <div className="todo-list">
      {todos.map(info => <Todo {...info} key={info._id} />)}
    </div>
  )
}
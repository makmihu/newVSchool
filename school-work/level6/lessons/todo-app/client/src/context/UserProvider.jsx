import { useState, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || '',
    todos: []
  }
  const [userState, setUserState] = useState(initState)

  const signup = async (credentials) => {
      try {
        const res = await axios.post('/api/auth/signup', credentials)
        const {user, token} = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user)) 
        setUserState(prev => ({
          ...prev,
          user, 
          token
        })) 
      } catch (err) {
        console.log(err.response.data.errMsg)
      }
  }

  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials)  
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      getUserTodos() 
      setUserState(prev => ({
        ...prev,
        user, 
        token
      }))
    } catch (err) {
      console.log(err.response.data.errMsg)
    }
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: '',
      todos: []
    })
  }

  const getUserTodos = async () => {
    try {
      const res = await userAxios.get('/api/secured/todo/user')
      setUserState(prev =>({
        ...prev,
        todos: res.data
      }))    
    } catch (err) {
     console.log(err.response.data.errMsg)    
    }
  }

  const addTodo = async (newTodo) => {
    try {
      const res = await userAxios.post('/api/secured/todo', newTodo)
      setUserState(prev =>({
        ...prev,
        todos: [...prev.todos, res.data]
      }))
    } catch (err) {
      console.log(err.response.data.errMsg)    
    }
  }


  return(
    <UserContext.Provider value={{
        ...userState,
        signup,
        login,
        logout,
        addTodo
    }}>
      {props.children}
    </UserContext.Provider>
  )    
}
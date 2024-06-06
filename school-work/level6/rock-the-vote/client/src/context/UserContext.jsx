import { useState, createContext, useEffect} from 'react'
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
    issues: [],
    errMsg: ''
  }
  const [userState, setUserState] = useState(initState)
  // const [allIssues, setAllIssues] = useState([])

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
      handleAuthErr(err.response.data.errMsg)
    }
  }

  const login = async (credentials) => {
    try {
      const res = await axios.post('/api/auth/login', credentials)  
      const {user, token} = res.data
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      getUserIssues() 
      setUserState(prev => ({
        ...prev,
        user, 
        token
      }))
    } catch (err) {
      handleAuthErr(err.response.data.errMsg)
    }
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: '',
      issues: []
    })
  }

  function handleAuthErr(errMsg){
    setUserState(prev => ({
      ...prev,
      errMsg
    }))
  }

  function resetAuthErr(){
    setUserState(prev => ({
      ...prev,
      errMsg: ''
    }))
  }

  const getUserIssues = async () => {
    try {
      const res = await userAxios.get('/api/secured/issue/user')
      console.log(res.data)
      setUserState(prev =>({
        ...prev,
        issues: res.data
      }))    
    } catch (err) {
     console.log(err.response.data.errMsg)    
    }
  }

  const addIssue = async (newIssue) => {
    try {
      const res = await userAxios.post('/api/secured/issue', newIssue)
      setUserState(prev =>({
        ...prev,
        issues: [...prev.issues, res.data]
      }))
    } catch (err) {
      console.log(err.response.data.errMsg)    
    }
  }

  // const getAllIssues = async () => {
  //   try {
  //     const res = await userAxios.get('/api/secured/issue')
  //     setAllIssues(res.data)    
  //   } catch (err) {
  //    console.log(err.response.data.errMsg)    
  //   }
  // }

  // useEffect(() => {
  //   getAllIssues() 
  // }, []) 

  return(
    <UserContext.Provider value={{
      ...userState,
      // ...allIssues,
      resetAuthErr,
      signup,        
      login,
      logout,
      addIssue
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import LoginForm from '../sections/LoginForm'

export default function Login() {
  const signupLogin = useContext(UserContext)
  const initInputs = { username: "", password: "" }
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)
  
  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    //signup
  }

  function handleLogin(e){
    e.preventDefault()
    //login
  }


  return (
    <main>
      <div className='loginContainer'>
        <h1>Rock the Vote</h1>
        {!toggle ? 
            <>
              <LoginForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}
                btnText="Sign up"              
              />
              <p onClick={() => setToggle(prev => !prev)}>Already a Member?</p>
            </> 
        : 
            <>
              <LoginForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"              
              />
              <p onClick={() => setToggle(prev => !prev)}>Need to Signup?</p>
            </> 
        }
      </div>
    </main>
  )
}
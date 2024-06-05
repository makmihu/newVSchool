import { useState, createContext} from 'react'
import axios from 'axios'

export const UserContext = createContext()

export default function UserProvider(props){
const [userState, setUserState] = useState()

  return(
    <UserContext.Provider value={{
      ...userState
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
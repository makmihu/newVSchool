import { useState } from 'react'
import Form from './Form'
import Badge from './Badge'

function App() {
  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      birthplace: "",
      phone: "",
      favFood: "",
      comments: "", 
    }
  )
  const [badges, setBadges] = useState([])

  function handleChange(event){
    const {name, value,} = event.target
    setFormData(prev => {
        return {
            ...prev,
            [name]: value
        }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    setBadges(prev => {
      return [
        ...prev,
        {
        firstName: formData.firstName, 
        lastName: formData.lastName, 
        email: formData.email, 
        birthplace: formData.birthplace,
        phone: formData.phone,
        favFood: formData.favFood,
        comments: formData.comments,
        }
      ]
    })
    setFormData(
      {
        firstName: "", 
        lastName: "", 
        email: "", 
        birthplace: "",
        phone: "",
        favFood: "",
        comments: "", 
      }
    )
    console.log(badges)
  }

  const badgeMapped = badges.map(info =>(
    <Badge 
      key={info.phone}
      firstName= {info.firstName} 
      lastName= {info.lastName} 
      email= {info.email} 
      birthplace= {info.birthplace}
      phone= {info.phone}
      favFood= {info.favFood}
      comments= {info.comments}
    />
  ))

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
      {badgeMapped}
    </div>
  )
}

export default App


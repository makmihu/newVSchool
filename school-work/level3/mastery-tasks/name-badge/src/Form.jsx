import { useState } from 'react'


function Form(props) {
    
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={props.handleChange}
        name="firstName"
        value={props.formData.firstName}
        className='formItem'
        minLength={3}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={props.handleChange}
        name="lastName"
        value={props.formData.lastName}
        className='formItem'
        minLength={3}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={props.handleChange}
        name="email"
        value={props.formData.email}
        className='formItem'
        minLength={3}
        required
      />
      <input
        type="text"
        placeholder="Place of Birth"
        onChange={props.handleChange}
        name="birthplace"
        value={props.formData.birthplace}
        className='formItem'
        minLength={3}
        required
      />
      <input
        type="number"
        placeholder="Phone Number"
        onChange={props.handleChange}
        name="phone"
        value={props.formData.phone}
        className='formItem'
        minLength={9}
        required
      />
      <input
        type="text"
        placeholder="Favorite Food"
        onChange={props.handleChange}
        name="favFood"
        value={props.formData.favFood}
        className='formItem'
        minLength={3}
        required
      />        
      <textarea 
        value={props.formData.comments}
        placeholder="Tell Us About Yourself"
        onChange={props.handleChange}
        name="comments"
        className='formItem'
        minLength={3}
      />
      <button
        onSubmit={props.handleSubmit}
      >Submit</button>
    </form>
  )
}

export default Form

import React from 'react'
import Header from '../sections/Header'

export default function ProductPage(props) {

  return (
      <div>
        <Header 
          class={"smallLogo"} 
          header={props.title}
        />
      </div>
  )
}
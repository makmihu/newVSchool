import React from 'react'
import Header from './components/sections/Header'
import ProjectCard from './components/sections/ProjectCard'

export default function App() {
  return (
    <>
      <Header />

      <div className='projectsContainer'>
        <h1>My Projects</h1>

        <ProjectCard 
          side={"left"}
          src={""}
          name={"Mikkie Makes Shop"}
          desc={"temporary desc for styling"}
        />

        <ProjectCard 
          side={"right"}
          src={""}
          name={"Rock The Vote"}
          desc={"temporary desc for styling"}
        />
      </div>
    </>
  )
}
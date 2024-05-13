import { useContext } from 'react'
import Form from './Form'
import Thing from './Thing'
import { UglyContext } from './uglyContext'

function App() {
  const {uglyThingsCollection} = useContext(UglyContext)
  const thingsMapped = uglyThingsCollection.map((info) =>(
    <Thing 
      key={info._id}
      // id={info._id}
      // title={info.title}
      // description={info.description}
      // imgUrl={info.imgUrl}
      {...info}
    />
  ))

  return (
    <div>
      <h1 className='header'>Ugly Things</h1>
      <Form />
      {/* <p className='thingsHeader'>List of Ugly Things</p> */}
      <div className='thingsContainer'>
        {thingsMapped}
      </div>
    </div>
  )
}

export default App
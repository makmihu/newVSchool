import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './Header'
import Meme from './Meme'
import MemeCollection from './MemeCollection'


function App() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })
  const [allMemes, setAllMemes] = React.useState([])

  const [collection, setCollection] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage(event) {
    event.preventDefault()    
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme, 
        randomImage: url
    })) 
  }

  function handleChange(event) {
    event.preventDefault()
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  const id = <date className="now"></date>

  function saveMeme(event) {
    event.preventDefault()
    setCollection(prevCollection => {
      return [
        ...prevCollection,
        {
          id: uuidv4(),
          topText: meme.topText,
          bottomText: meme.bottomText,
          image: meme.randomImage,
        }
      ]
    })
    setMeme(
      {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
      }
    )
    console.log(collection)
  }

  function deleteMeme(id){
    // event.preventDefault()
    setCollection(prevCollection => prevCollection.filter((meme, index) => meme.id !== id))
  }

  function editMeme(id, updatedMeme){
    setCollection(prev => prev.map(meme => meme.id === id ? updatedMeme : meme))
  }

  const collectionMapped = collection.map((info, index) => (

    <MemeCollection 
      key={index}
      id={info.id}
      topText={info.topText}
      bottomText={info.bottomText}
      image={info.image}
      deleteMeme={deleteMeme}
      editMeme={editMeme}
    />
  ))
  return (
    <div>
      <Header />
      <Meme 
        topText={meme.topText} 
        bottomText={meme.bottomText} 
        randomImage={meme.randomImage} 
        getMemeImage={getMemeImage}
        handleChange={handleChange}
        saveMeme={saveMeme}
      />
      <div className='savedMemes'>
        {collectionMapped}
      </div>
      <Header />
    </div>  
  )
}

export default App

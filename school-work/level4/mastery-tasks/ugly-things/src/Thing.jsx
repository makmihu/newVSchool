import { useContext, useState } from 'react'
import { UglyContext } from './uglyContext'
import axios from 'axios';

function Thing(props) {
  console.log(props)
  const {setUglyThingsCollection} = useContext(UglyContext)
  const [toggle, setToggle] = useState(true)
  const [thingText, setThingText] = useState({
    imgUrl: props.imgUrl,
    title: props.title,
    description: props.description,
    id: props.id,
  })

  function editing(event) {
    event.preventDefault()
    const { name, value } = event.target
    setThingText(prev => ({
        ...prev,
        [name]: value
    }))
  }

  const editThing = (id) => {
    try {
      axios.put(`https://api.vschool.io/makaylamihu/thing/${id}`, thingText)
        .then(res => console.log("Thing edited:", res.data))
        .catch(err => console.log(err))
    } catch (error) {
      console.error("Error editing Thing:", error);
    }
    setToggle(prev => !prev)
  }

  const deleteThing = async (id) => {
    try {
      const res = await axios.delete(`https://api.vschool.io/makaylamihu/thing/${id}`);
      console.log("Thing deleted:", res.data);
      setUglyThingsCollection(prev => prev.filter(thing => thing._id !== id));
    } catch (error) {
      console.error("Error deleting Thing:", error);
    }
  };

  return (
    <div className='thingDiv'>
      {toggle ?
        <>
          <div className='thingImgContainer'>
            <img className='thingImg' src={thingText.imgUrl}/>
          </div>
          
          <h1 className='thingTitle'>{thingText.title}</h1>
          
          <p className='thingDescription'>{thingText.description}</p>
        </>
        :
        <form onSubmit={editing} className='editingForm'>
          <textarea 
            type='text'
            name='imgUrl'
            value={thingText.imgUrl}
            onChange={editing}
            className='editingThing'
          />
          
          <textarea
            type="text"
            name='title'
            value={thingText.title}
            onChange={editing}
            className='editingThing'
          />
          
          <textarea
            type='text'
            name='description'
            value={thingText.description}
            onChange={editing}
            className='editingThing'
          />
          
          <button 
            className='thingBtn'
            onClick={() => editThing(props.id)}

          >
            Save Changes
          </button>
        </form>
      }

      <button 
        className='thingBtn'
        onClick={() => setToggle(prev => !prev)}
      >
        {toggle ? "Edit" : "Cancel"}
      </button>
      
      <button 
        className='thingBtn'
        onClick={() => deleteThing(props.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Thing
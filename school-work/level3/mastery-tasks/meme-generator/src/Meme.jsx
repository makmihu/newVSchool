import React from "react"

function Meme(props) {
  return (
    <main>
      <form className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="formInput"
          name="topText"
          value={props.topText}
          onChange={props.handleChange}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="formInput"
          name="bottomText"
          value={props.bottomText}
          onChange={props.handleChange}
        />
        <button 
          className="formButton btn"
          onClick={props.getMemeImage}
        >
          Get a new meme image!
        </button>
        <button 
          className="SaveButton btn"
          onClick={props.saveMeme}
        >
          Save Meme!
        </button>

      </form>
        <div className="meme">
          <img src={props.randomImage} className="memeImage" />
          <h2 className="memeText top">{props.topText}</h2>
          <h2 className="memeText bottom">{props.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme
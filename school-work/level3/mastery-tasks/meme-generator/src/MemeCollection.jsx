import React from "react"

function MemeCollection(props) {
    const [toggle, setToggle] = React.useState(true)
    const [memeText, setMemeText] = React.useState({
        topText: props.topText,
        bottomText: props.bottomText,
        image: props.image,
        id: props.id,
    })
    function editing(event) {
        event.preventDefault()
        const { name, value } = event.target
        setMemeText(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.editMeme(props.id, memeText)
        setMemeText({
            topText: props.topText,
            bottomText: props.bottomText,
            image: props.image,
            id: props.id,
        })
        setToggle(!toggle)
    }
    return (
        <div className="collectionSection">
            <div className="collectionMeme">
                <img src={props.image} className="savedMemeImage" />

                {toggle ?
                    <>
                        <h2 className="savedMemeText savedTop">{props.topText}</h2>
                        <h2 className="savedMemeText savedBottom">{props.bottomText}</h2>
                    </>
                    :
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="topText"
                            value={memeText.topText}
                            onChange={editing}
                            className="editingMemeText savedTop"
                        />
                        <input
                            type="text"
                            name="bottomText"
                            value={memeText.bottomText}
                            onChange={editing}
                            className="editingMemeText savedBottom"
                        />
                        <button>Save</button>
                    </form>
                }
            </div>
            <div className="collectionBtns">
                <button
                    className="savedBtns"
                    onClick={() => setToggle(prev => !prev)}
                >
                    {toggle ? "Edit" : "Cancel"}
                </button>
                <button
                    className="savedBtns"
                    onClick={() => props.deleteMeme(props.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MemeCollection
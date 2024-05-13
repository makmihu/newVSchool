import React from "react"
import axios from "axios"

export const UglyContext = React.createContext()

function UglyContextProvider(props){ 
    
    const [uglyThingsCollection, setUglyThingsCollection] = React.useState([])
    const [uglyThing, setUglyThing] = React.useState({
        title: "",
        description: "",
        imgUrl: ""
    })
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        axios.get("https://api.vschool.io/makaylamihu/thing")
            .then(response => setUglyThingsCollection(response.data))
            .catch(error => {
                console.error(`error getting ugly things collection`, error)
                setError(`error getting collection, try again later`)
            })
      }, [])

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setUglyThing(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("https://api.vschool.io/makaylamihu/thing", uglyThing);
          console.log("New thing added:", response.data);
          setUglyThingsCollection(prev => [
            ...prev, 
            response.data
          ])
        } catch (error) {
          console.error("Error creating thing:", error);
        }
        setUglyThing(
          {
            title: "",
            description: "",
            imgUrl: ""   
          }   
        )
    };

    return(
        <UglyContext.Provider value={{
            uglyThingsCollection,
            setUglyThingsCollection,
            uglyThing,
            handleChange,
            handleSubmit,
            // deleteThing,
            error
        }}>
           {props.children}
        </UglyContext.Provider>
    )
}

export default UglyContextProvider
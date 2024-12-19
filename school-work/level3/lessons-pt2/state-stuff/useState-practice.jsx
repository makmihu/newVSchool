// 1. Pass in a new color of your choosing in place of the old one. 
    // Hint: we don’t care what the previous color was.
    
    const [color1, setColor1] = useState("pink")
    setColor1("green")
    
// 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
    
    const [color2, setColor2] = useState("pink")
    setColor2(prevColor => prevColor === pink ? "blue" : "pink")

// 3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    
    const [people, setPeople] = useState([
    	{
    		firstName: "John",
    		lastName: "Smith"
    	}
    ])
    
    setPeople(prevPeople => {
        return [
            ...prevPeople,
            {
                firstName: "Jane",
                lastName: "Doe"
            }
        ]
    })
    
// 4. Change the following state-setting functions to use an implicit return
    // 1. 
        const [color3, setColor3] = setState(["pink", "blue"])
        setColor3(prevColors => [...prevColors, "green"])
        
    // 2. 
        const [countObject, setCountObject] = setState({count: 0})
        setCountObject(prevState => ({count: prevState.count + 1}))
        
// 5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    const [person, setPerson] = useState({
    	firstName: "John",
    	lastName: "Smith"
    })
    
    setPerson(prevPerson => ({
        ...prevPerson,
        age: 30
    }))
    
// 6. What’s wrong with the following state update?
    
    const [colors, setColors] = useState(["pink", "blue"])
    
    setColors("green")
    // prev state overwritten, and changed from array to string

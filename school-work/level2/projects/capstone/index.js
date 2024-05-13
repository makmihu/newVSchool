const todoList = document.getElementById("todo-list")
const inputSubmit = document.getElementById("submit-button")
    //part 1 - Get

    function clearList() {
        const el = document.getElementById("todo-list")
        while(el.firstChild) {
            el.removeChild(el.firstChild)
        }
    }
function createTodo(){
    axios.get('https://api.vschool.io/makaylamihu/todo')
        .then(response => {
            clearList()
            for(let i = 0; i < response.data.length; i++){
                const div = document.createElement('div')
                const title = document.createElement('h1')
                const description = document.createElement("p")
                const price = document.createElement("p")
                const imgDiv = document.createElement("div")
                const img = document.createElement("img")
                const deleteBtn = document.createElement("button")
                const editBtn = document.createElement("button")
                const completed = document.createElement("p")
                const input = document.createElement("input")

                div.classList.add("todoBox")
                title.classList.add("todoTitle")
                description.classList.add("todoDescription")
                price.classList.add("todoPrice")
                imgDiv.classList.add("imageBox")
                img.classList.add("todoImg")
                deleteBtn.classList.add("deleteBtn")
                editBtn.classList.add("editBtn")
                completed.classList.add("completed")
                input.classList.add("checkbox")

                title.textContent = response.data[i].title
                description.textContent = response.data[i].description
                price.textContent = `$${response.data[i].price}`
                img.src = `${response.data[i].imgUrl}`
                deleteBtn.textContent = "Delete"
                editBtn.textContent = "Edit"
                completed.textContent = "Completed"
                input.setAttribute("type", "checkbox")
                
                todoList.appendChild(div)
                div.append(title, description, price, imgDiv, deleteBtn, editBtn, completed, input)
                imgDiv.appendChild(img)

                if(response.data[i].completed === true){
                    title.style.textDecoration = "line-through"
                    description.style.textDecoration = "line-through"
                    price.style.textDecoration = "line-through"
                    input.checked = true;
                }
            
                // part 3 - Put
                input.addEventListener("click", () => {
                    const yesCompleted = {completed: true}
                    const notCompleted = {completed: false}
                    if(input.checked === true){
                        axios.put(`https://api.vschool.io/makaylamihu/todo/${response.data[i]._id}`, yesCompleted)
                            .then(res => createTodo())
                            .catch(err => console.log(err))
                    } else {
                        axios.put(`https://api.vschool.io/makaylamihu/todo/${response.data[i]._id}`, notCompleted)
                            .then(res => createTodo())
                            .catch(err => console.log(err)) 
                    } 
                })
                // part 4 - Delete
                deleteBtn.addEventListener("click", () => {
                    axios.delete(`https://api.vschool.io/makaylamihu/todo/${response.data[i]._id}`)
                            .then(res => createTodo())
                            .catch(err => console.log(err))
                })
            }
        })
        .catch(error => console.log(error))
}
createTodo()
    // part 2 - Post
form.addEventListener("submit", (event) =>{
    event.preventDefault()
    let inputTitle = form.elements["title"].value
    let inputDescription = form.elements["description"].value
    let inputPrice = form.elements["price"].value
    let inputImgUrl = form.elements["img-url"].value

    const newPost = {
        title: inputTitle,
        description: inputDescription,
        price: inputPrice,
        imgUrl: inputImgUrl
    }
    axios.post('https://api.vschool.io/makaylamihu/todo', newPost)
        .then(response => createTodo())
        .catch(error => console.log(error))
        //create a new div will all the new values

}) 

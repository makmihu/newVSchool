
// console.log(axios)

//GET requests with axios
//url: https://api.vschool.io/makaylamihu/todo

    //get all

    // axios.get("https://api.vschool.io/makaylamihu/todo")
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))

        // axios.get("https://api.vschool.io/makaylamihu/todo")
        //     .then(response => {
        //         for(let i = 0; i < response.data.lengthl; i++){
        //             const h1 = document.createElement('h1')
        //             h1.textContent = response.data[i].title
        //             document.body.appendChild(h1)
        //         }
        //     })
        //     .catch(error => console.log(error))

            
    //get one
        // axios.get("https://api.vschool.io/makaylamihu/todo/65f8dcda78fe452c114b4ef3")
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log(error))



//POST request
//request body

// const newTodo = {
//     title: "my 4th todo",
//     description: "this is my 4th entry",
//     imgUrl: "https://images.unsplash.com/photo-1710945464425-15c24275aab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
// }
// axios.post('https://api.vschool.io/makaylamihu/todo', newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// const todoForm = document.todoform

// todoForm.addEventListener("submit", event => {
//     event.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }

//     axios.post('https://api.vschool.io/makaylamihu/todo', newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// })



// DELETE 
    //requires id or some other identifyer for what you are wanting to delete

// axios.delete('https://api.vschool.io/makaylamihu/todo/65f8dcda78fe452c114b4ef3')
//     .then(response => console.log(response))
//     .catch(error => console.log(error))


//PUT
// const updates = {
//     title: "I CHANGED THE TITLE!!"
// }

// axios.put("https://api.vschool.io/makaylamihu/todo/65f8e01f78fe452c114b4efe", updates)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

const person = {
    name: "steve",
    age: 20
}

const nameChange = {
    name: "stephanie"
}

const result = Object.assign(person, nameChange)
console.log(result)
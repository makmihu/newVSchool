const form = document.myForm

form.addEventListener("submit", (event) =>{
    event.preventDefault()

//     // console.log(form.gender.value)
//     // console.log(form.entertainment)

//     const checkInputs = []

//     for(let i = 0; i < form.entertainment.length; i++){
//         if(form.entertainment[i].checked){
//             checkInputs.push(form.entertainment[i].value)
//         }
//     }

//     console.log(checkInputs)


    console.log(form.city.value)
}) 


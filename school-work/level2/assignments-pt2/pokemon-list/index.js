//url https://api.vschool.io/pokemon
// console.log(axios)


axios.get("https://api.vschool.io/pokemon/")
    .then(response => {
        for(let i = 0; i < response.data.objects[0].pokemon.length; i++){
            const p = document.createElement('p')
            p.textContent = response.data.objects[0].pokemon[i].name
            document.body.appendChild(p)
        }
    })
    .catch(error => console.log(error))
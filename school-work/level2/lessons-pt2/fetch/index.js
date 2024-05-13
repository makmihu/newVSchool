// api that you can make HTTP requests from a js application
// similar to xhr object
    // expands on it 
    // is promise based
//fetch is native api, so you don't need to install anything

// url: "https://rickandmortyapi.com/api/character"
fetch("https://rickandmortyapi.com/api/character", //{
//     method: 'post',
//     body: JSON.stringify({})
// }
)
    .then(res => res.json())    // the .json is the res for the next then
    .then(res => {
        
        for(let i = 0; i < res.results.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = res.results[i].name
            document.body.appendChild(h1)
        }
    })
    .catch(err => console.log(err))
//XMLHttpRequest
/**
 *  - is a constructor used to make asynchronous http requests from js
 * 
 *  - this uses callbacks to track the progress of server requests and 
 *      handle the response sent back
 */

//how do we create requests (xhr)
//what parts of this object are important for our request

//xhr.onreadystatechange
//xhr.readyState
//xhr.status
//xhr.responseText

// xhr.readyState
    //1- request sent
    //2
    //3
    //4- back from database

// xhr.status
    // 200  - request went well and came back in good order 
    // 404  - not found
    // 201  - post request successfully added to database
    // 500  - something went wrong in the server



//Two methods are used to set up and send the HTTP request, these methods are:
    // xhr.open()   -  to set up the request
    // xhr.send()   -  to send the request

// url: https://api.vschool.io/makaylamihu/todo/
// url: https://swapi.dev/api/people/1

    const xhr = new XMLHttpRequest()
        //Method. //url                 //async?
    xhr.open("GET", "https://swapi.dev/api/people/", true)
    xhr.send()

    xhr.onreadystatechange = function(){
        if( xhr.readyState === 4 && xhr.status === 200){
            //response 
            // console.log(xhr.responseText)  // this is just a block of info
            const JSONdata = xhr.responseText
            const data = JSON.parse(JSONdata)
            // console.log(data.results)      // this makes it look like arrays
            showData(data.results)
        } //else if( xhr.readyState === 4 && xhr.status !== 200){
        //     console.log(xhr.responseText)
        // }
    }





function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}
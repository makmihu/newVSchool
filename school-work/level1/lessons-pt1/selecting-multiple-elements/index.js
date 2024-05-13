var things = document.getElementsByClassName("things")
for (var i = 0; i < things.length; i++){
    console.log(things[i].innerText)
}

//quiz
//1 id - returns single element/object
//  class name (tag name) - returns array-like object
//  also
//  id - needs id to find
//  class name - needs class to find
//     eg.   document.getElementsByTagName("div")
//2 an empty array
//3 "null"
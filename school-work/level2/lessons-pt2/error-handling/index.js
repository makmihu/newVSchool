//keywords
    //try
        //try out some code
        //if an error occurs (if an error is thrown) go to catch
    //catch
        //handle the error
    //finally
    //throw
    //error


try {
    if(2 === 2){
        throw new Error("Hey I am an error!")
    }
    console.log("Did i console.log?")
}
catch(err){
    console.log(err)
}
finally {
    console.log("I am running no matter what!")
}
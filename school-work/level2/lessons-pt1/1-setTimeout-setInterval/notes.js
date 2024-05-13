// setTimeout(arg1, arg2)


// version 1
    var intervalID = setInterval(function(){
        console.log('hello!')
    }, 1000);
    
    // 1 second
    'hello!'
    
    // 2 seconds
    'hello!'
    
    clearInterval(intervalID)


// version 2

    function sayHello(){
        console.log('hello!');
    }
    
    
    function stopSayingHello(){
        clearInterval(intervalID)
    }
    
    
    var intervalID = setInterval(sayHello, 1000);
    
    setTimeout(stopSayingHello,  6000)
    
    
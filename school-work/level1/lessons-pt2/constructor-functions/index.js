//Constructor Functions
    //they build objects
    //"new" - instantiates the object

function Car(make, model, year, honkSound){      // uppercase for constructor functions
    this.make = make
    this.model = model
    this.year = year
    this.honkSound
    // this.honk = function(){
    //     console.log(this.honkSound)
    // }
}

Car.prototype.honk = function(){
    console.log(this.honkSound)
}

var jeep = new Car("Jeep", "Cherokee", 1995, "MEERRP")

// console.log(jeep)
    //Car { make: 'Jeep', model: 'Cherokee', year: 1995 }

var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAARP")

//console.log(mazda.model)
    //3 hatchback

jeep.honk()         //this will console log its honk sound
mazda.honk()        //same with this one, just with it's own sound
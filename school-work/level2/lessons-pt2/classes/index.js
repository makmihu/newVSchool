//constructor functions
    //blueprint for generating js objects with the same shape

    // //constructor is "what it is to be car"
    // function Car(make, model){
    //     this.make = make
    //     this.model = model
        
    // }
    // //What do cars "Do"
    // Car.prototype.honk = function(){
    //     console.log("Honk")
    // }

//intantiate
    // const jeep = new Car("jeep", "cherokee")
    // const mazda = new Car("mazda", "3")


    // console.log(jeep.make)

//ES6 classes
    class Vehicle{
        constructor(make, model, honkSound){
            this.make = make
            this.model = model
            this.honkSound = honkSound
        }
        honk(){
            console.log(this.honkSound)
        }
        drive(){
            console.log("Vrooom")
        }
    }
    class Motorcycle extends Vehicle {
        constructor(make, model,honkSound, hasSideCar){
            super(make, model, honkSound)
            this.hasSideCar = hasSideCar
        }
    }

    const jeep = new Vehicle("jeep", "cherokee", "veep")
    const mazda = new Vehicle("mazda", "3", "Hooonk")
    const harley = new Motorcycle("harley", "davidson", "verp", true)
    
    // harley.honk()   --- see's it's not in the motorcycle, so looks at vehicle 
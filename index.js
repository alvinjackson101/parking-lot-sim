const maxParkedTime = 5000; //parking lot time
const CarFactoryLimit = 100;

const Dates = [ "2019" , "2000" , "2017" , "2005" , "1995" , "1980"]; //car random dates
const carPlates = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "1", "2", "3", "4", "5", "6"]; //car random plates
const carModels = [ "Porsche" , "Lamborghini" , "Ferrari" , "Tesla" , "BMW" ]; //random car models

const MaxParkingSpaces = 10; // max parking lot spaces
const parkingLot = [];

const carsWaiting = [];
const carsLeft = [];

function Car(){ 
    this.plates = carPlates[Math.floor(Math.random() * carPlates.length)];
    this.make = carModels[Math.floor(Math.random() * carModels.length)];
    this.year = Dates[Math.floor(Math.random() * Dates.length)];
    this.time = Math.floor(Math.random() * maxParkedTime);
    this.parked = false;

    this.park = function(car){ 
        console.log("Car is Parking", car)
        let parkedCar = parkingLot.push(car);
        this.parked = true;
        setTimeout(function(){car.leave(parkedCar)}, this.time); //timer of car parked
    }

    this.leave = function(car) {
        console.log("Car is Leaving!", car)
        this.parked = false;
        carsLeft.push(car);
        
        parkCar();
    }
}

console.log("leaving(car)");

function carFactory() {
    for(let i = 0; i < CarFactoryLimit; i++) {
       carsWaiting.push(new Car())
    }

    return carsWaiting;
}



// function createSpaces(){
//     this.taken = false;
// }

//function attendant(){
   // if(parkingLot.length < MaxParkingSpaces){
    //    this.taken = true;
//        console.log(car.push

   // }


function parkCar() {
    console.log(carsWaiting)
    if( parkingLot.length <= MaxParkingSpaces){
        for(var i = 0; i < MaxParkingSpaces; i++){
            let car = carsWaiting.pop();
            car.park(car);
        }
    } else {
        console.log("Lot is full, please wait.")
    }
}

console.log(parkingLot);

const cars = carFactory();

parkCar();
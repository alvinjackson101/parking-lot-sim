const maxParkedTime = 5000; //parking lot time
const CarFactoryLimit = 20;

const Dates = [ "2019" , "2000" , "2017" , "2005" , "1995" , "1980"]; //car random dates

const carModels = [ "Porsche" , "Lamborghini" , "Ferrari" , "Tesla" , "BMW" ]; //random car models

const MaxParkingSpaces = 10; // max parking lot spaces
const parkingLot = [];

const carsWaiting = [];
const carsLeft = [];

function Car(){ 
    this.plates = getRandomPlate();
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
        let carPosition = parkingLot.map(function(car) { // Locating car in parkingLot by cars array index returning value
            var parkedCar = parkingLot.indexOf(car);
            return parkedCar;
        });
        let carLeaving = parkingLot.splice(carPosition, 1)[0]; // removing car from parkingLot by index
        carsLeft.push(carLeaving); // Pushing that car to the carsLeft array

        if(carsWaiting.length > 0){
            parkCars();
        }
    }
}


function getRandomPlate(){//gets 6 digit random plates
    const carPlates = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; //car random plates
    let plateNumber = '';

    for(var i = 0; i < 6; i++){
        plateNumber += carPlates[Math.floor(Math.random() * carPlates.length)]

    }
    return plateNumber;
}
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


function parkCars() {
    if( parkingLot.length <= MaxParkingSpaces){
        for(var i = 0; i < (MaxParkingSpaces - parkingLot.length); i++){
            let car = carsWaiting.pop();
            console.log("Pushing car to park function!", car)
            car.park(car);
        }
    } else {
        console.log("Lot is full, please wait.")
    }
}


const cars = carFactory();
parkCars();
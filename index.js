
const maxParkedTime = 5000;
const CarFactoryLimit = 12;

const Dates = [ "2019" , "2000" , "2017" , "2005" , "1995" , "1980"];
const carPlates = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "1", "2", "3", "4", "5", "6"];
const carModels = [ "Porsche" , "Lamborghini" , "Ferrari" , "Tesla" , "BMW" ];

const MaxParkingSpaces = 10;
const parkingLot = [];

function Car(){

    this.plates = carPlates[Math.floor(Math.random() * carPlates.length)];
    this.make = carModels[Math.floor(Math.random() * carModels.length)];
    this.year = Dates[Math.floor(Math.random() * Dates.length)];
    this.time = Math.floor(Math.random() * maxParkedTime);
    this.parked = false;

    this.park = function(){
        this.parked = true;
        setTimeout(function(e){
            e.leave();
        
        },
        this.time,
        this);

        console.log("parked!");
        console.dir(this);

        this.leave = function() {
            console.log("leaving...");
            this.parked = false;
            console.log("left!");
            console.dir(this);
        }
    }

    return this;
}

function carFactory() {
    let newCars = [];

    for(let i = 0; i < CarFactoryLimit; i++) {
       newCars.push(new Car())
    }

    return newCars;
}


const cars = carFactory();

console.log(cars)

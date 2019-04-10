
//random car
//var arrCar = [ "Porsche" , "Lamborghini" , "Ferrari" , "Tesla" , "BMW" ];
//var randomCar= arrCar[Math.floor(Math.random()*arrCar.length)];
//document.getElementById("parkingspot2").innerHTML = randomCar;

//random year 
//var arrYear = [ "2019" , "2000" , "2017" , "2005" , "1995" , "1980"];
//var randomYear= arrYear[Math.floor(Math.random()*arrYear.length)];
//document.getElementById("parkingspot1").innerHTML = randomYear;

//random plate
//var arrPlate = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "1", "2", "3", "4", "5", "6"];
//var randomPlate= arrPlate[Math.floor(Math.random()*arrPlate.length)];
//document.getElementById("parkingspot3").innerHTML = randomPlate;

function Car(make, model, year, time){

    this.make = make();
    this.model = model;
    this.year = year;
    this.time = time;
    this.parked = false;

    this.park = function(){
        this.parked = true;
        setTimeout(function(e){
            e.leave();
        
        },
        time,
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

    let car = new Car("ford", "f150", "2000", "5000");
    
    }

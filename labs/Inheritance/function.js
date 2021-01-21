"use strict";

let modul= (function creat(){
function createBicyclePrototye() {
    return  {
     speed:0,
     applyBrake(decrement){
         
       this.speed=this.speed-decrement;
       console.log("brake applied....");
     },
     speedup(increment){
        
         this.speed=this.speed+increment;
         console.log("speed up...."+ "by"+ this.speed);
     }
    }
   }
   
   //MountainBikeProtoype
   function createMountainBikeProtoype(prototpe){
           return Object.create(prototpe,{ gear:{value:1},setgear(gearValue){this.value=gearValue}})
   }

   ///start
   let bicyclePro;
   let mountainBikePro;
   function start(){
    bicyclePro =createBicyclePrototye();
    mountainBikePro = createMountainBikeProtoype( bicyclePro);
   }
   start();
   return {bicyclePro,mountainBikePro};
})();
  
//test
modul.bicyclePro.speedup(10);
console.log(modul.bicyclePro.speed);

/*****************************************************************************/
// Using class

class bicycle{
  
    constructor(speed){
        this.speed=speed;
    }
    applyBrake(dec){
        this.speed=this.speed-dec;
    }
    speedup(incre){
        this.speed=this.speed+incre;
    }
}

let bicyObj= new bicycle(10);

class MountainBke{
    constructor(bikeObj,gear){
        this.bikeObj=bikeObj;
        this.gear=gear;
    }

    setGear(gearValue){
        this.gear=gearValue;
    }
}

//test using class
let mountbike= new MountainBke(bicyObj,1);
mountbike.setGear(5);
console.log(mountbike.gear);




/*****************************************************************************/
//Using Constractor function

//bicycle obje
function Bicycle(speed){
    this.speed=speed;
}
let bicycleObj= new Bicycle(0);
Bicycle.prototype.applyBrake= function(decre){
    this.speed=this.speed-decre;
}
Bicycle.prototype.speedup=function(incre){
    this.speed=this.speed+incre;
}
bicycleObj.speedup(40);
console.log(bicycleObj.speed);

// MountainObject

function MountainBike(bikeObj,gear){
    this.bikeObj=bikeObj;
    this.gire=gear;
}
let mountainBike= new MountainBike(bicycleObj,1);
MountainBike.prototype.setGear= function(gearvalue){
    this.gear=gearvalue;
}

//test
mountainBike.setGear(4);
console.log(mountainBike.gear);





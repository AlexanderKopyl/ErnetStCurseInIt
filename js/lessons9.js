class Calculator {

    constructor(a,b,opr){
        this._a = a;
        this._b = b;
        this._opr = opr;
    }

    result (){

        let result = eval(this._a + this._opr + this._b);
        console.log(result);

    }

}

const myCalc = new Calculator(10, 30, "+");
console.log(myCalc.result());


class Bender {

    constructor(bool){
      this._wasted = bool;
    }

}

Bender.prototype.bend = function (){
    if(this._wasted){
        console.log("Не могу работать");
    }else {
        console.log("Cгибаю");
    }

};
Bender.prototype.say = function (){

    if(this._wasted){
        console.log("Kiss my shiny metal ass");
    }else {
        console.log("Привет");
    }

};

const myBender = new Bender(false);
myBender.bend();
myBender.say();

// class Car {
//
//     constructor( model, engineVolume, horsePower){
//
//         this._model = model;
//         this._engineVolume = engineVolume;
//         this._horsePower = horsePower;
//         this._speed = 0;
//         this._speedLimit = 140;
//
//     }
//
//     info(){
//         console.log("Модель",this._model);
//         console.log("Объём двигателя",this._engineVolume);
//         console.log("Лошадиные силы",this._horsePower);
//     }
//
//     move(){
//         this._speed += 50;
//         if(this._speed >=this._speedLimit){
//             this._speed = this._speedLimit;
//             alert(this._speed);
//         }
//     }
//
//     stop(){
//         this._speed = 0;
//     }
//
//     signal(signal,count){
//
//         for(var i = 0; i < count; i++){
//           console.log(signal);
//         }
//
//     }
// }
//
// var myCar = new Car ("Kopeyka", 1.2, 60);
// myCar.info();
// myCar.move();
// myCar.move();
// myCar.move();
// myCar.stop();
// myCar.signal('Bip-bip',5);

class Truck {

    constructor(){
        this._speedLimit = 100;
    }


     carryCargo(){
        console.log('Перевоз груза')
    }
}

class SportCar {

    constructor(){
        this._speedLimit = 250
    }
}

class mySportCar extends SportCar{

    constructor( model, engineVolume, horsePower){
        super(model, engineVolume, horsePower);
        this._model = model;
        this._engineVolume = engineVolume;
        this._horsePower = horsePower;
        this._speed = 0;

    }

    info(){
        console.log("Модель",this._model);
        console.log("Объём двигателя",this._engineVolume);
        console.log("Лошадиные силы",this._horsePower);
    }

    move(){
        this._speed += 50;
        if(this._speed >=this._speedLimit){
            this._speed = this._speedLimit;
            alert(this._speed);
        }
    }

    stop(){
        this._speed = 0;
    }

    signal(signal,count){

        for(var i = 0; i < count; i++){
            console.log(signal);
        }

    }
}
class myTruckCar extends Truck{

    constructor( model, engineVolume, horsePower){
        super(model, engineVolume, horsePower);
        this._model = model;
        this._engineVolume = engineVolume;
        this._horsePower = horsePower;
        this._speed = 0;

    }

    info(){
        console.log("Модель",this._model);
        console.log("Объём двигателя",this._engineVolume);
        console.log("Лошадиные силы",this._horsePower);
    }

    move(){
        this._speed += 50;
        if(this._speed >=this._speedLimit){
            this._speed = this._speedLimit;
            alert(this._speed);
        }
    }

    stop(){
        this._speed = 0;
    }

    signal(signal,count){

        for(var i = 0; i < count; i++){
            console.log(signal);
        }

    }
}
var mySport = new mySportCar ("Lamborghini", 6.2, 1200);
var myTruck = new myTruckCar ("Freightliner Cascadia", 16, 600);
//
// mySport.info();
// mySport.move();
// mySport.move();
// mySport.move();
// mySport.move();
// mySport.move();
// mySport.stop();
// mySport.signal('Bip-bip',5);
myTruck.info();
myTruck.carryCargo();
myTruck.move();
myTruck.move();
myTruck.stop();
myTruck.signal('Bip-bip',5);
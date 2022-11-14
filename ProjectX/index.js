//class Inheritance

function Bikes (Name, Modelyear, modelName)
{
    vehicle.call(this, Name, Modelyear, modelName);
    this.model = modelName;
    this.Modelyear = Modelyear;

    Bikes.prototype=new vehicle();
    Bikes.prototype.constructor= Bikes;
}





//Getter

const Bikes = {

    Name: 'Royal enfield',
    getName() {

        return this.Name;
    }
};

console.log(Bikes.Name);





//Setter

const Bikes = {
    Name: 'Royal enfield',

    set changeName(newName) {

        this.Name = newName;
    }    
};  

console.log(Bikes.Name);

Bikes.changeName = 'triumph';

console.log(Bikes.Name);




//Map

let map = new Map();
let bike ={};
map.set(bike, {Name , Modelyear, modelName});
console.log(map);




// Weakmaps

const Bikes =function ()  {
    const vehicle = new WeakMap();
    return class BikesClass {
        constructor() {
            vehicle.set(this, { 
                count: 0
            });
        }

        increaseCount() {
            vehicle.get(this).count;
        }
    }
};


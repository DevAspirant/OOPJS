// ------------- Encapsulation: Reduce complexxity + increase reusability  -----------------
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate);
}

console.log(getWage(10,1,10)); 
// ------------- Abstraction : Reduce complexxity + isolate impact of changes  -----------------
// ------------- Inheritance: Eliminate redudundant code  -----------------
// ------------- Polymorphism: Refactor ugly switch/case statment  -----------------
// -------------------- Create an object -------------------------
let empolyee = {
    baseSalary : 30000,
    overtime: 10,
    rate: 20, 
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(empolyee.getWage());
console.log("------------ Objects ------------- ");
/*  Objects  */

const circle = {
    radius: 1,
    location: {
        x:1, y: 1
    },
    draw: function(){ console.log("draw"); 
}
};

circle.draw();

console.log(" define an object using factors & constractors function");

console.log(' FACTORY FUNCTION'); 

function createCircleByFactoryFunction(radius){
    return {
        radius,
        draw: function(){
            console.log("draw");
        }
    };
}

const factorCircle = createCircleByFactoryFunction(1);
factorCircle.draw();

console.log(' Constractor FUNCTION'); 

function ConstractorFunction(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new ConstractorFunction(1);

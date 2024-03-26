console.log("OOP");

const circle = {
    radius: 2,
    location:{x:1,y:2},
    draw: function(){console.log("Circle Draw")}
}
circle.draw();
///////////////////////////
//factory function
function createCircle(radius){
return{
    radius,
    draw: function(){
console.log("circle draw ")
    }
}
}

const circle_obj = createCircle(1);
circle_obj.draw();
///////////////////////////////
//constructor function
function Circle(radius){
    console.log("this is : ", this)
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}
const another = new Circle(1);

//Value & references

circle_obj.location = {x:10};
const propertyName = "center";

circle_obj[propertyName]={x:1};
console.log(circle_obj)

delete circle_obj.location;
console.log(circle_obj)


if ("radius" in circle){
    console.log("circle has a radius")
}



function Cir(rad){
    this.rad=rad;
    this.defaultLocation ={x:3,y:2};
    this.computeOptimumLocation = function(factor){

    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log("Draw Compute Location");
    }


    



Object.defineProperty(this,'defaultLocation',{
    get:function(){
        return defaultLocation;
    },
    set:function(value){
     if(!value.x || !value.y){
        console.log("Invalid Location");
        defaultLocation=value;
     }
    }
} );
}

const cir = new Cir(20);
// cir.computeOptimumLocation(0.1);
cir.defaultLocation = 1;
cir.draw();




function Stopwatch()
{
    let starttime , endTime , running , duration =0;

    this.start = function(){
        if(running){
            throw Error("Stopwatch is already running");
        }
        running = true;
        starttime = new Date(); 
        return this;
    }
    this.stop = function(){
        if(!running){
            throw Error("Stopwatch is not started");
        }
        running = false;
        endTime = new Date(); 

        const seconds = (endTime.getTime()-starttime.getTime())/1000;
        duration = duration+seconds;
        return this;
    }
    this.reset = function(){
        starttime=null;
        endTime=null;
        running=false;
        duration=0;
        return this;
    }

    Object.defineProperty(this,'duration',{
   get:function(){return duration;}
    })
}

const watch = new Stopwatch();
watch.start()
console.log(watch.duration);
watch.stop();
console.log(watch.duration);     



////////////////////////////////////
//OOP Article Examples

// Create a new object using Object.create()
const myObj = Object.create(null);

// Add some properties to the object
myObj.firstName = "John";
myObj.lastName = "Doe";
myObj.age = 30;
// Log the object to the console
console.log(myObj);




// define an object with some properties and methods
const myObject = {
    name: "John",
    age: 30,
    greet() {
      console.log("Hello, my name is ",this.name ,  "and I am " , this.age ,  "years old.");
    }
  };
  const newObj = Object.assign({}, myObject, {
    email: "john@example.com",
    getInfo() {
      console.log(`My email is ${this.email}.`);
    }
  });
  console.log(newObj.name);
  console.log(newObj.email); 
  newObj.greet(); 
  newObj.getInfo();




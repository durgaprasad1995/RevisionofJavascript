//creating object
/* 1. factories and constructors
2.primitives and reference types
3.working with properties
4.private properties
5.getter/setters

we are using let keyword instad of var in ES6 
stop using var use let or const-->we are basically definging constent
*/
const circle = {
    radius:1,//this is called property
    location :{
        x:1,
        y:1
    },
    draw:function(){
        console.log('draw');
    }
};//creating object {}-->this refers as object literal syntax
//object in javascript is colletion of key pair
//properties we use to hold vaues .A function or a method is used to defind some logic
//now we have circle object we can access his members with dot object
circle.draw();

//factory function
function createcircle(radius){
    return{
        radius,
        drawin:function(){
            console.log('drawin')
        }
    }
}
const circle2 = createcircle(1);
circle2.drawin()
//constructor
function Circle(radius){
    console.log('thiss',this);
    this.radius=radius;   //this is a basically refernce  to the object that is excuting the piece of code 
    this.draw = function(){
        console.log('draw2');
    }
}
const another = new Circle(1);//this will create a new object it will over ride 

//constertor property  every object in javascript has proprety called constructor and that references the function that used to create an object

//call method is used for calling a function.The below code is call the first arg sepcify the target of this 

    // Circle.call({},1) === const another = new Circle(1) 
    Circle.call({},1);
    Circle.apply({},[1,2,3]);
    //apply method is used same as call but insted of passing argument we are passing in an array


    /*Value Type vs reference type 
     Number         object
     string         function
     boolen         array
     symbol
     undefined
     null    
    
    */
   let Number =10;
   function incrase(Number){
       Number++;
   }
   incrase(Number);
   console.log(Number);//it was considering the line number 66 it it was not considering the inside the function

   let obj ={Value:10};

   function incrase1(obj){
    obj.Value++;
   }
   incrase1(obj);
   console.log(obj);


   //adding and removing property

   circle.location ={x:1};//we can declare the proprty like this 
   circle['location']={x:1};//in this way also we can define the property
   //when we want to dynamically access a property name.this is useful when we have spl character in the poperty that time we can use brackets  
   const popertyName ='location';
   circle[popertyName]={x:1};
   //deleting property 
   delete circle.location;
   //enumarting poprety
   for(let key in circle){//we have to use for loop for enumarting popretry
        if(typeof circle[key] !== 'function')
        console.log(key,circle[key]);//it returns both poperty and mehtods
   }
   const keys = Object.keys(circle);//to get all the keys
   console.log(keys);

if('radius' in circle)//for existance of a property or method in an object using in operator
   console.log("circle is in ");


   //abstraction--> hide the deatils and show the essential
   this.defaulLocation ={x:0,y:0};
   this.computeOptimumLocation = function(){
       //
   }
   this.abs = function(){
       computeOptimumLocation(0.1);

       Object.defineProperty(this,'defaultLocation',{
        
        get:function(){
            console.log("development is===========");
            let abstrac = defaulLocation;
            return abstrac;
        }
    })
   };
 
   var foo = function () {};

// logs "foo is a Function: true"
console.log('foo is a Function: ' + (foo instanceof Function));

// logs "foo.prototype is an Object: true"
console.log('foo.prototype is an Object: ' + (foo.prototype instanceof Object));
  
   //closer what are the variable is accessible to an inner function 
   //scope is tempory it is availbale only for function

   //defineProperties for multiple propety and define Property for defining the property
   //getert setter
 
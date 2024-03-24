//alert("hello");
//alert("world!!");

//var myName="sneha";
//var yourName= prompt("whats your name?");
//alert("my name is "+ yourName+" welcome!!");

//concatination of strings using +
//length of strings
//var mytweet= prompt("write ur tweet:");
//var tweetLength = mytweet.length;
//alert("you have written " + mytweet.length +" character");

//slicing
//var myName="snehashri";
//myName.slice(1,4) //start from 1 until 4 excluding 4
//>>'neh'

//casing of string
//myName.toUpperCase();

//functions
function getmilk(money){
    var totalbolttles= Math.floor(money / 1.5); //1 bottles 1.5rs
    alert("get " + totalbolttles + " bottles of milk");
    alert("put");
    alert("do");
    return money % 1.5; // remaining money
}

//call a function
var change= getmilk(5);
console.log("change : "+ change);


//random number
var n = Math.random();
n= n* 6 //between 0 and 5
n= Math.floor(n) + 1; //between 1 and 6
console.log(n); //between 0 and 1(excluding)


//love calculator
prompt("whats your name?");
prompt("whats their name?");
var lovescore= Math.random() * 100; //0- 99
lovescore = Math.floor(lovescore) +1; //1-100
if(lovescore >  80){
    alert("your love score is " + lovescore + " %." +" You love each other like ram loves siya");
}
else{
    alert("your love score is " + lovescore + " %");
}




//arrays
var names=["abc","ram", "siya", "sneha","riya","xyz"];
console.log(names.length);
console.log(names[0]);
console.log(names.includes("abcv"));

//adding element to array
var output= [1, 2];
output.push(3);
console.log(output);
output.pop();
console.log(output);

//while loop
var i=1;
while(i < 3){
    console.log(i);
    i++;
}

//for loop
for(var i=1; i<10; i++){
    console.log(i);
}


//---------------------------------------------------------------------------------

//object 

var person= {
    name: "sneha",
    age: 24
};
console.log(person);
//dot notation
console.log(person.name);
//bracket notation for dynamically selecting property
var selection = 'name';
console.log(person[selection]);
//objects are dynamic- we can add properties to objects dynamically
person.address ="satara";
delete person.address;

//object oriented programming

const circle ={
    radius :1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw : function(){
        alert("draw");
    }
}
circle.draw();

//factory function

function CreateCircle(radius){
    return {
        radius,
        draw(){
            alert("draw");
        }
    };
}

const circle1 = CreateCircle(5);
circle1.draw();

//Constuctor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const circle3= new Circle(1);
console.log(circle3.radius)

//every object has a constructor property- method used to create object
//but generally we use their literal form
circle.constructor();

//e.g. constructor objects vs literal
new String(); //'', ""
new Boolean(); //true/ false
new Number() // 1, 2
//object literal {}
//template literal ``

//Functions are objects
//primitives are copied by their values but objects are copied by their reference


//template literal ``- instead if giving \n or \' for space and quote when we use template literal it will be easy
const another= `this is my
'first' message`;
console.log(another);

//add a placeholder
var name="john";
const another1= 
`Hi ${name}

This is my first mail.

Regards,
Sneha`;

console.log(another1);



//Function Declaration
function catchme(){
    console.log("catch");
}

//Anonymous Function Expression
const run = function(){
    console.log("run");
}
var move = run;
run();
move();

//Named Function Expression
var run1 = function walk(){
    console.log("walk");
}


//************************************** */
//Hoisting- its the moving function declaration to the top of the file by js is called hoisting
//Function decalaration we can call before it but
//Function expression we cannot

//Function Declaration

catchme();

function catchme(){
    console.log("catch");
}


runtwo(); //this thows error
// Function Expression
const runtwo = function(){
    console.log("run");
}

//************************************************ */


//Rest opeartor(...)- can be used where there are multiple no. of parameteres in a function

function sum(...args){
    console.log(args);
    return args.reduce((a,b) => a+b);
    //var total =0; 
    //for(var value of arguments){
     //   total += value;
    //}
    //return total;
}

console.log(sum(2,6,6,4,9));

//rest parameter must be last formal parameter
function sum(discount, ...prices){
    
    const total= prices.reduce((a,b) => a+b);
    return total *(1-discount);   
}
console.log(sum(0.1, 20, 30));


//default parameters

function sum(A = 5, C= 20, B){
    return A+C+B;      
}
console.log(sum(1, undefined, 2));

//----------------------------------------------

//this keyword

//normal method in a function -> gives object
//function => global(window, global)
const video ={
    title: 'a',
    play(){
        console.log(this);
    }    
}
video.play();

//return window object
function Play(){
    console.log(this);
}
Play();

//constructor function return new object
function Move(title){
    this.title = title;
    console.log(this);
}
var v = new Move('abc'); //{}

//use of this keyword
const video1 ={
    title: 'mybook',
    tags :['b','c','d'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }    
};
video1.showTags();

//changing This  : solution 1 using self
const video2 ={
    title: 'mybook',
    tags :['b','c','d'],
    showTags(){
        const self= this; //refering to current video object
        this.tags.forEach(function(tag){
            console.log(self.title,tag);
        });
    }    
};
video2.showTags();

//----------------------------------------------------------
//call, apply and bind we can set 'this' argument for given function

function playVideo(a, b){
    console.log(this);
}

playVideo.call({name: 'Sneha'}, 1, 2);
playVideo.apply({name:'Sneha'},[1,2]);
playVideo.bind({name:'Sneha'})(); //return new function with new object
playVideo(); //return window object

//--------------------------------------------------------

//changing This  : solution 2 using bind
const video3 ={
    title: 'mybook',
    tags :['b','c','d'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }.bind(this)); //here this is video object
    }    
};
video3.showTags();


//changing This  : solution 3 using arrow function as it automatically inherits this keyword
const video4 ={
    title: 'mybook',
    tags :['b','c','d'],
    showTags(){
        this.tags.forEach((tag) => {
            console.log(this.title,tag);
        }); 
    }    
};
video4.showTags();

//***************************************** */

//array: spread operator(...)

const first =[1,2,3];
const second=[4, 5, 6];
//const combined = first.concat(second);
const combined = [...first,'a', ...second];
console.log(combined);

//const copy= combined.slice();
const copy= [...combined];
console.log(copy);


//Filter in array
const numbers1 =[1, 2, 7, 8, 10];
numbers.filter((value) => {
    return value > 5;
});

//shortcut
var filtered= numbers1.filter(val => val > 5);


//------------------------------------------
//Map : map each item in array to string 

const numbers =[1, 2, 7, 8, 10];

//shortcut
var filtered= numbers.filter(val => val > 5);

//map each number with list tag in html markup
const items = filtered.map( val => '<li>' + val + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

//map each number with obj
const item2 = filtered.map( n => ({value: n}));
console.log(item2);

//Reduce: to sum all ele in array
const numbers5 =[1, 2, 7, 8, 10];
const sum1 = numbers5.reduce( (a, b) => a+b);
console.log(sum1);







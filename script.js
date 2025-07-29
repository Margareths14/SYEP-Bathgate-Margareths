console.log("Hello world!");

let myString="a2b3c";
console.log(myString);

let myNumVar= 123;
console.log(typeof myNumVar);

console.log(10 + " eggs");
console.log(10+ 7 + " eggs");
console.log("eggs" + 10 + 7);

//both conditions need to be true 
console.log(7 > 3)&&(5 < 10);

//only condition must be true 
console.log(10 > 3) || (10>12);

//if the statment is logical or not 
console.log(5>3);


function introduction(name, age) {
    console.log("Hello, my name is " + name + "and i am " + age + "years old.");
}

introduction("Margareth", 14);

const hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
    greeting = "Good morning!";
}else if (hour < 18 ) {
    gretting = "Good afternoon!";
}else {
    gretting = "Good evening!";
}

document.getElementById("greeting").innerText =greeting;
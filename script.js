const reviews = [
{
    id: 1,
    name: 'Shelby Shoup',
    job:'Humanities Teacher/middle school advisor',
    img: 'shelby shoup.jpg',
    text:'Margareth is a wonderful student who is always eager to learn and grow. She was my advise from 6th to 8th grade, and I was consistently impressed by her dedication and her egerness to take on new challenges. She is a natural leader who is always willing to help her classmates. I have no doubt that she will continue to excel in all everything she does. I am so proud of her and cant wait to see all the amazing things she will accomplish in the future!.',
    
},
{
    id: 2,
    name: 'Aminata Sako',
    job:'web developer',
    img: '85099CF9-83D8-4B5B-8314-28424EFEF9CD.JPG',
    text:'Margareth is a dedicated and hardworking friend. She is always willing to lend a helping hand when she can and is always there to support her friends. She is a great listener and always has a positive attitude. Margareth is also very creative and has a great sense of humor. She is very passionate about her intrests and is always eager to try new things.',
    
},
{
    id: 3,
    name: 'Makayla Amoto',
    job:'Web developer',
    img: 'IMG_8166.jpeg',
    text:'Margareth is a kind and caring person who always puts others first. She is a great friend who is always there to listen and support her friends. She is also very creative and has a great sense of humor. Margareth is very passionate about her interests and is always eager to learn new things. She is a great role model for her peers and is always willing to help others.',
},
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn'); // make sure HTML uses .prev-btn
const nextBtn = document.querySelector('.next-btn'); // make sure HTML uses .next-btn

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
















// console.log("Hello world!");

// let myString="a2b3c";
//console.log(myString) 


// console.log(myString);
// let myNumVar= 123;

// console.log(typeof myNumVar);

// console.log(10 + " eggs");
// console.log(10+ 7 + " eggs");
// console.log("eggs" + 10 + 7);

// //both conditions need to be true 

// console.log(7 > 3)&&(5 < 10);

// //only condition must be true 
// 
// console.log(10 > 3) || (10>12);

// //if the statment is logical or not 
// console.log(5>3);


// function introduction(name, age) {
//     console.log("Hello, my name is " + name + "and i am " + age + "years old.");
// }

// introduction("Margareth", 14);

// const hour = new Date().getHours();
// let greeting = "";

// if (hour < 12) {
//     greeting = "Good morning!";
// }else if (hour < 18 ) {
//     gretting = "Good afternoon!";
// }else {
//     gretting = "Good evening!";
// }

// document.getElementById("greeting").innerText =greeting;

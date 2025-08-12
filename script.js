const review=[
    {
        id: 1,
        name:'Shelby Shoup',
        job:'Middle school advisor/humanities teacher',
        img:'Shelby shoup.jpg',
        text:'Margareth is a wonderful student who is always eager to learn and grow. She was my advise from 6th to 8th grade, and I was consistently impressed by her dedication and her egerness to take on new challenges. She is a natural leader who is always willing to help her classmates. I have no doubt that she will continue to excel in all her future endeavors. I am so proud of her and cant wait to see all the amazing things she will accomplish in the future! '
    }
]


{
        id: 1,
        name: 'Aminata Sako',
        job: 'web developer',
        img: '85099CF9-83D8-4B5B-8314-28424EFEF9CD.JPG',
        text: 'Margareth is a dedicated and hardworking friend. She is always willing to lend a helping hand when she could and is always there to support her friends. She is a great listener and always has a positive attitude. Margareth is also very creative and has a great sense of humor. She is very passionate about her intrests and is always eager to try new things.'
    }

    {
        id: 1,
        name: 'peter jones',
        job:'web developer'
        img:'#'
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?'
    }
]
//section items
  const img =document.getElementById('person-img');
  const author= document.getElementById('author');
  const job= document.getElementById('job');
  const info= document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item =review [currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = review[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
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

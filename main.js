"use strict";

// console.log('Hey hey!')

// const eating = (str) => {
//     return `I ate some ${str}`;
// }

// const passing = (str) => {
//     return `I passed on the ${str}`;
// }

// const whatDo = (str, funct) => {
//     return funct(str);
// }

// console.log(whatDo('pizza', eating));
// console.log(whatDo('watermelon', passing));

// const mainButton = document.getElementById('main-btn');

// console.log(mainButton);

const otherBtn = document.querySelector('#main-btn');

// console.log(otherBtn);

const clickMe = () => {
    console.log('You clicked me!')
}

otherBtn.addEventListener('click', clickMe);
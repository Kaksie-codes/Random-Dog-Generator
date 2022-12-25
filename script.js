//https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage');
const button = document.querySelector('button')

// const getRandomDog = () => {
//     fetch('https://dog.ceo/api/breeds/image/random').then(Response => Response.json()).then(json => {    
//     dogImageDiv.innerHTML = `<img src="${json.message}" alt="" height = '300px' width = '300px'>`
//     });
// }

const getRandomDog = async() => {
   let randomDog = await fetch('https://dog.ceo/api/breeds/image/random');
   let dog = await randomDog.json();
   dogImageDiv.innerHTML = `<img src="${dog.message}" alt="" height = '300px' width = '300px'>`    
}

button.addEventListener('click', getRandomDog )
    

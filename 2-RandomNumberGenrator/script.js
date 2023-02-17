const number = document.querySelector('.count');
const btn = document.querySelector('.generate');

const generateNumber = () => {
    // generate number btn 1 and 10
    const randomNumber = Math.floor(Math.random()*10 + 1);
    number.innerHTML = randomNumber;
}

btn.addEventListener('click', generateNumber);

generateNumber();
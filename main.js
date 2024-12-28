
const colors = ['darkblue', 'darkred', 'green', 'purple', 'orange', 'teal', 'pink'];

const bgBody=document.querySelector("#ccc")
const colorContainer = document.querySelector("#c");
const buttonFlip = document.querySelector("#cc");

let currentColorIndex = 0;

function FlipColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
    colorContainer.style.backgroundColor = colors[currentColorIndex];
    bgBody.style.backgroundColor=colors[currentColorIndex] ;
}

buttonFlip.addEventListener('click', FlipColor);

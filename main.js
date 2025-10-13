 const container = document.querySelector(".container");

function makeGrid() {
    const container = document.querySelector('.container');

    //making the 16x16 grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        //adding individual squares as it cycles
        square.classList.add('square');
        container.appendChild(square);
        }
    }
    
}
    const hoverElement = document.getElementById('div_hover');

    hoverElement.addEventListener('mouseover', () =>  {
        hoverElement.style.backgroundColor = 'coral';
    });
makeGrid();
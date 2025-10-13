const container = document.querySelector(".container");

function makeGrid() {
  const container = document.querySelector('.container');

  for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add hover effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'coral';
    });

    //clears square back if left on
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = 'pink';
    });

    container.appendChild(square);
  }
}

makeGrid();

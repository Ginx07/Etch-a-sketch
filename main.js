const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');
let size = 0;

function makeGrid(size) {
  container.innerHTML = ''; // Clear existing squares
  container.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  container.style.gridTemplateRows = `repeat(${size}, 20px)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    //creating individual squares
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'coral';
    });
    container.appendChild(square);
  }
}

function newGame() {
    let num = prompt("Enter size", "1-99")
    if (num != null) {
      makeGrid(num)};
  
}

resetBtn.addEventListener('mousedown', newGame)

// resetBtn.addEventListener('click', () => {
//   makeGrid(16); // Reset to default 16x16
// });

makeGrid(13); // Initial grid

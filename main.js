const container = document.querySelector('.container');
const resetBtn = document.getElementById('resetBtn');

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

//changing opacity on hover
function greyscale() {
  let currentOpacity = .1;
  let colorPick = "#E8E8E8";

  if (e.style.opacity <= 0.9) {
    e.style.opacity = +e.styleopacity + 0.1;
  }
}


// resetBtn.addEventListener('click', () => {
//   makeGrid(16); // Reset to default 16x16
// });

makeGrid(13); // Initial grid

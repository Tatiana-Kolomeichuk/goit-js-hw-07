function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.body;
const colorSpanEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();


  bodyEl.style.backgroundColor = randomColor;


  colorSpanEl.textContent = randomColor;
});
const inputColor1 = document.getElementById('color-a');
const inputColor2 = document.getElementById('color-b');
let currentDirection = 'to bottom';
let outPutCode = document.getElementById('code');

let setDirection = (value, _this) => {
  let directionsButton = document.querySelectorAll('.buttons button');
  for (let i of directionsButton) {
    i.classList.remove('active');
  }
  _this.classList.add('active');
  currentDirection = value;
};

let generateCode = () => {
  outPutCode.value = `background-image: linear-gradient(${currentDirection}, ${inputColor1.value}, ${inputColor2.value});`;

  document.getElementsByTagName(
    'BODY'
  )[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${inputColor1.value}, ${inputColor2.value})`;
};

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', generateCode);

const copyButton = document.querySelector('#copy');
copyButton.addEventListener('click', () => {
  outPutCode.select();
  document.execCommand('copy');
  alert('Gradient Copied!');
});

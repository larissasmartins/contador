var currentNumber = 0;
var wrapper = document.getElementById("currentNumber");

function refreshColor(){
  if (currentNumber < 0) {
    wrapper.style.color = 'red';
  } else {
    wrapper.style.color = '#230C33';
  }  
}

function increment() {
  currentNumber = currentNumber + 1;
  refreshColor();
  wrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  refreshColor();
  wrapper.innerHTML = currentNumber;
}
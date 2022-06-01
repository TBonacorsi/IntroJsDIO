var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

function getScoreColor(currentNumber) {
  if (currentNumber < 0) return 'red'
  if (currentNumber => 0) return 'black'
}

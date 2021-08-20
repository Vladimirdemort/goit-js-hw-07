const counterChanger = document.querySelectorAll(`#counter button`);
const counterValue = document.querySelector(`#value`);

const incrementButton = counterChanger[1];
const decrementButton = counterChanger[0];

let count = 0;
updateDisplay()

incrementButton.addEventListener('click', increment);

function increment () {
    count++;
    updateDisplay()
};

decrementButton.addEventListener('click', decrement)

function decrement() {
    count--;
    updateDisplay()
    
}

function updateDisplay() {
    counterValue.innerHTML = count;
}
console.log(incrementButton)
const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')

nameInput.addEventListener('input', onEventSubmit)
console.log(nameInput.value)
function onEventSubmit(event) {
    const value = event.currentTarget.value;
    if (value === '') {
       return nameOutput.textContent = 'незнакомец';
    }
    nameOutput.textContent = `${value}`;
    console.log(typeof value)
}


console.log(nameOutput.textContent)


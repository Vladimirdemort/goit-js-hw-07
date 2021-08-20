const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validChecker);

function validChecker(event) {
    const value = event.currentTarget.value;
    const requiredValue = Number(inputEl.attributes[2].nodeValue);
    if (value.length !== requiredValue) {
        return inputEl.classList.add('invalid');
    } else if (value.length === requiredValue) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
   
}


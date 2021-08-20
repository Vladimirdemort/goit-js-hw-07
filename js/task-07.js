const controlEl = document.querySelector('#font-size-control')
const textEl = document.getElementById('text')

controlEl.addEventListener('input', fontSizeChanger)

function fontSizeChanger(event) {
    const rangeValue = Number(event.target.value);
    textEl.style.fontSize = rangeValue + 'px';
    
}

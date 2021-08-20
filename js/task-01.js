const catList = document.querySelector(`#categories`)

const catElement = catList.querySelectorAll(`.item`)
console.log(`В списке ${catElement.length} категории`)
catElement.forEach(num => console.log(`Категория: ${num.querySelector('h2').textContent}, Количество элементов: ${num.querySelectorAll('li').length}`))
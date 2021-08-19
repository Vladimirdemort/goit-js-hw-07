const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredList = document.querySelector(`#ingredients`)

const ingredEl = ingredients.map(option => {
  const listItem = document.createElement('li')
  listItem.textContent = option;
  return listItem
}
  )

  ingredList.append(...ingredEl)

